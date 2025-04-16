export default async function handler(request) {
    try {
        // Get request body as text first
        const text = await request.text();
        // Then parse it as JSON
        const body = text ? JSON.parse(text) : {};

        console.log("Request received");

        // Forward the request to the actual API
        const response = await fetch('https://api.generect.com/api/linkedin/leads/by_icp/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.VITE_GENERECT_KEY || process.env.GENERECT_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        // Get the response data
        const data = await response.json();

        // Return the response
        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
        });
    } catch (error) {
        console.error("Error:", error);

        return new Response(JSON.stringify({
            error: error.message
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}