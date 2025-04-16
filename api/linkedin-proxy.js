export default async function handler(req, res) {
    try {
        // For Vercel serverless functions without Next.js
        const { method, body, headers } = req;

        console.log("Request received:", method);
        console.log("Request body:", body);

        // Forward the request to the actual API
        const response = await fetch('https://api.generect.com/api/linkedin/leads/by_icp/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.VITE_GENERECT_KEY || process.env.GENERECT_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        console.log("API response status:", response.status);

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
        console.error("Serverless function error:", error);

        return new Response(JSON.stringify({
            error: error.message,
            stack: error.stack
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
        });
    }
}