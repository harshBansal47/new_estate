export default async function handler(req, res) {
    try {
        // Environment variables and endpoint
        const serverUrl = process.env.Backend_URL;
        const url = new URL(req.url); // Correct URL construction for full URL parsing
        const pathSegments = url.pathname.split('/'); // Split the pathname by '/'
        const id = pathSegments[pathSegments.length - 1]; // Get the last segment of the URL

        const propertyUrl = "api/property/findone/";

        // Fetch data from the backend
        const response = await fetch(`${serverUrl}${propertyUrl}${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add other headers as needed
            }
        });

        if (!response.ok) {
            // If the response was not successful, throw an error with the status
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response body
        const data = await response.json();

        // Send back the data as JSON
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        console.error('Fetch error:', error); // Log error for server-side debugging
        res.status(500).json({ error: error.message || 'An unexpected error occurred.' });
    }
}
