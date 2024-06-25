import express, { Request, Response } from 'express';
import axios from 'axios';
import { linkPreview } from './link-preview';
import cors from 'cors';

const app = express();
app.use(express.json())

const customCorsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = process.env.HOST_NAMES?.split(',') || [];
        if (allowedOrigins.indexOf(origin ?? "") !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Request from unauthorized origin"), false);
        }
    },
};
app.use(cors(customCorsOptions));
app.post('/link-preview', async (req: Request, res: Response) => {
    try {
        const { url } = req.body;
        const preview: any = await linkPreview(url);
        res.json(preview);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/image-proxy', async (req: Request, res: Response) => {
    try {
        const { url } = req.query;
        const response = await axios.get(url as string, { responseType: 'stream' });
        res.setHeader('Content-Type', response.headers['content-type']);
        response.data.pipe(res);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch image' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));