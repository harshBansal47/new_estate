import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const authHeader = req.headers.get('Authorization');
        if (!authHeader) {
            return new NextResponse(JSON.stringify({ message: 'No token provided' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Extract token from "Bearer <token>" format
        const token = authHeader.startsWith('Bearer ')
            ? authHeader.substring(7)
            : authHeader;


        // Forward the request to the Express server
        const serverurl = process.env.BACKEND_URL;
        const auth_url = "api/auth";

        const expressResponse = await fetch(`${serverurl}${auth_url}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!expressResponse.ok) {
            throw new Error(`Error from Express server: ${expressResponse.statusText}`);
        }

        const data = await expressResponse.json();

        return new NextResponse(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 's-maxage=300, stale-while-revalidate'
            },
            status: 200
        });

    } catch (error) {
        console.error('Failed to fetch from the Express server:', error);
        return new NextResponse(JSON.stringify({ message: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
