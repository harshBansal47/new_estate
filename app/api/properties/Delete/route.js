export default async function DELETE(req, res) {
    try {
        const id = req.query.id;  // Adjust based on how the ID is passed
        const serverUrl = process.env.Backend_URL;
        const propertyUrl = `/api/property/delete/${id}`;  // Corrected URL format

        const response = await fetch(`${serverUrl}${propertyUrl}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const data = await response.json();  // Parse JSON directly from the response

        if (!response.ok) {
          // Log the error message from the API if the response was not successful
          console.error('API error:', data.message);
          return new Response(JSON.stringify({ error: data.message || 'Failed to delete property' }), {
            status: response.status,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        }

        // Send back the successful data response
        return new Response(JSON.stringify(data), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
    } catch (error) {
        console.error('Request failed:', error);
        return new Response(JSON.stringify({ error: error.message || 'An unexpected error occurred.' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        });
    }
}
