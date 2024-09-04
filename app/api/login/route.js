export async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      // Check if the incoming request body is a ReadableStream and read it
      if (req.body instanceof ReadableStream) {
        const reader = req.body.getReader();
        const streamData = await reader.read();
        if (streamData.done) {
          console.log("No data in stream");
          return new Response(JSON.stringify({ message: 'No data provided' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        
        // Convert the stream into text
        const decoder = new TextDecoder();
        const jsonText = decoder.decode(streamData.value);
        const parsedBody = JSON.parse(jsonText);

        // Forward the request to the Express server
        const serverurl = process.env.Backend_URL;
        const login_url = "api/login";

        const expressResponse = await fetch(`${serverurl}${login_url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonText  // send the JSON text received from the stream
        });

        // Check if the fetch was successful
        if (!expressResponse.ok) {
          throw new Error(`Error from Express server: ${expressResponse.statusText}`);
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
        });

      } else {
        console.log('Unexpected request body type');
        return new Response(JSON.stringify({ message: 'Invalid request body' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } catch (error) {
      console.error('Failed to fetch from the Express server:', error);
      return new Response(JSON.stringify({ message: 'Internal server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } else {
    // Handle any non-POST requests
    return new Response(`Method ${req.method} Not Allowed`, {
      status: 405,
      statusText: 'Method Not Allowed'
    });
  }
}
