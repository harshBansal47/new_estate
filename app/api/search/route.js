import { cache } from "react";

export async function GET(req, res) {
    try {
        const SERVER_URL = process.env.Backend_URL;

        // Parse the request URL to extract query parameters
        const { searchParams } = new URL(req.url, SERVER_URL);

        const city = searchParams.get('city');
        const keyword = searchParams.get('keyword');

        // Validate the required query parameters
        if (!city || !keyword) {
            return new Response(JSON.stringify({ error: 'City and keyword are required.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Construct the backend URL using environment variable and query parameters
        const backendUrl = `${SERVER_URL}api/search?city=${encodeURIComponent(city)}&keyword=${encodeURIComponent(keyword)}`;

        // Fetch data from the backend
        const backendResponse = await fetch(backendUrl, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        },{cache:'no-store'});

        // Handle fetch errors
        if (!backendResponse.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse and send the backend response data
        const data = await backendResponse.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Fetch error:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data from backend' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
