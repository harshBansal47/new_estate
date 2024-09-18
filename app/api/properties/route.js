


export async function POST(request){
  
    try {
        const serverurl = process.env.Backend_URL;
        const createPropertyUrl = "api/property/create";
        const formData = await request.formData();

        const expressResponse = await fetch(`${serverurl}${createPropertyUrl}`, {
          method: 'POST',
          body:formData,
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
             
      
    } catch (error) {
      console.error('Failed to forward the request:', error);
      res.status(500).send({ message: 'Internal server error' });
    }
  
}



// export async function POST(req, res) {
//   if (req.method === 'POST') {
//     try {
   
//       if (req.body instanceof ReadableStream) {
//         const reader = req.body.getReader();
//         const streamData = await reader.read();
//         if (streamData.done) {
//           console.log("No data in stream");
//           res.status(400).json({ message: 'No data provided' });
//           return;
//         }
        
//         // Convert the stream into text
//         const decoder = new TextDecoder();
//         const jsonText = decoder.decode(streamData.value);
//         const parsedBody = JSON.parse(jsonText);
//         console.log("parsend body",parsedBody);
//         const serverurl = process.env.Backend_URL;
//         const createPropertyUrl = "/api/property/create";

//         const expressResponse = await fetch(`${serverurl}${createPropertyUrl}`, {
//           method: 'POST',
//           body: jsonText,
//           headers: {
//             'Content-Type': 'application/json'
//           },
//         });

//         if (!expressResponse.ok) {
//           throw new Error(`Error from backend server: ${expressResponse.statusText}`);
//         }

//         const data = await expressResponse.json();
//         res.status(200).json(data);
   

//     } 
    
//   }catch (error) {
     
//     }
//   } else {
//     res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }
// }