export async function DELETE(request,{params}) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();  // Extracting the ID from the URL

    const serverurl = process.env.Backend_URL;
    const createPropertyUrl = "api/property/delete/";

    const response = await fetch(`${serverurl}${createPropertyUrl}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
   // Check if the request was successful
   if (!response.ok) {
    // If the response was not successful, throw an error with the status text
    throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
  }

    return new Response(JSON.stringify({ message: 'Property deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
   
  } catch (error) {
    console.error('Request failed:', error);
    return new Response(JSON.stringify({ error: error.message || 'An unexpected error occurred.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
