export default async function handler(request) {
    // Extract the necessary data from the request
    const body = await request.json();

    try {
        // Forward the request to the actual API
        const response = await fetch('https://api.generect.com/api/linkedin/leads/by_icp/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.VITE_GENERECT_KEY}`,
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
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}