import axios from 'axios';

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle OPTIONS request (preflight)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        try {
            const response = await axios({
                method: 'POST',
                url: 'https://api.generect.com/api/linkedin/leads/by_icp/',
                headers: {
                    'Authorization': req.headers.authorization,
                    'Content-Type': 'application/json'
                },
                data: req.body
            });

            return res.status(200).json(response.data);
        } catch (error) {
            console.error('Error proxying request:', error);
            return res.status(error.response?.status || 500).json(error.response?.data || { message: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}