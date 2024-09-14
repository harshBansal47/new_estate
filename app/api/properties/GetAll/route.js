export async function GET(req,res) {
    try {
      // Environment variables and endpoint
      const serverUrl = process.env.Backend_URL;
      const propertyUrl = "api/property/getAll";
  
      // Create a request object
      const response= await fetch(`${serverUrl}${propertyUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add other headers as needed
        }
      },{cache:'no-store'});
      // Make the fetch request using the Request object
      const fetchResponse = await response.json();
  
      // Check if the request was successful
      if (!response.ok) {
        // If the response was not successful, throw an error with the status text
        throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
      }
  
      // Parse the JSON response body
      const data = fetchResponse;
  
      
      // Create a new Response object to send back the data
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      // Return an error response
      return new Response(JSON.stringify({ error: error.message || 'An unexpected error occurred.' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
  