


export async function POST(req,res){
  
    try {
      if (req.body instanceof ReadableStream) {
        const reader = req.body.getReader();
        let chunks = [];
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
        }
  
        if (chunks.length === 0) {
          console.log("No data in stream");
          return new Response(JSON.stringify({ message: 'No data provided' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }
  
        // Concatenate the Uint8Array chunks into a single Uint8Array
        const concatenatedChunks = new Uint8Array(chunks.reduce((acc, val) => acc.concat(Array.from(val)), []));
  
        // Decode the concatenated chunks into a string
        const decoder = new TextDecoder();
        const jsonText = decoder.decode(concatenatedChunks);
  
        // Parse the JSON text to ensure it is valid and optionally modify it
        const parsedBody = JSON.parse(jsonText);
        const serverurl = process.env.Backend_URL;
        const createPropertyUrl = "api/gallery/upload";

        const expressResponse = await fetch(`${serverurl}${createPropertyUrl}`, {
          method: 'POST',
          body: jsonText,
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!expressResponse.ok) {
                    throw new Error(`Error from backend server: ${expressResponse.statusText}`);
          }
          
             // Get the JSON response from Express
        const data = await expressResponse.json();

        // Send the data back to the client
        return new Response(JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 's-maxage=300, stale-while-revalidate'
          },
          status: 200,
          statusText: 'OK'
        })
             
      } else {
        console.log('Unexpected request body type');
        res.status(400).json({ message: 'Invalid request body' });
      }
    } catch (error) {
      console.error('Failed to forward the request:', error);
      res.status(500).send({ message: 'Internal server error' });
    }
  
}

