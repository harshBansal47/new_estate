

export async function GET(req, res) {
    try {
        // Parse the request URL to extract query parameters
        const { searchParams } = new URL(req.url, `http://${req.headers.host}`);

        const city = searchParams.get('city');
        const keyword = searchParams.get('keyword');

        // Validate the required query parameters
        if (!city || !keyword) {
            return res.status(400).json({ error: 'City and keyword are required.' });
        }

        // Construct the backend URL using environment variable and query parameters
        const backendUrl = `${process.env.Backend_URL}api/search?city=${encodeURIComponent(city)}&keyword=${encodeURIComponent(keyword)}`;
        
        // Fetch data from the backend
        const backendResponse = await fetch(backendUrl, {
            method: 'GET', // Adjust this as per your backend method
            headers: {
                'Content-Type': 'application/json',
                // Include other headers as needed, for example:
                // 'Authorization': 'Bearer your_access_token',
            }
        });

        // Handle fetch errors
        if (!backendResponse.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse and send the backend response data
        const data = await backendResponse.json();
        res.status(200).json(data);

    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch data from backend' });
    }
}
