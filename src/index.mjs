import { pipeline } from '@huggingface/transformers';
import express from 'express';
import dotenv from 'dotenv';

// Library configs.
dotenv.config({ quiet: true });

// Get the enviroment variables.
const MODEL_ID = process.env.MODEL_ID || 'Xenova/toxic-bert';

// Setup Express.
const app = express();
app.use(express.json());

// Loading the model.
let classifier = null;

async function loadModel() {
    console.log(`[  ] Loading model "${MODEL_ID}"...`);
    classifier = await pipeline('text-classification', MODEL_ID);
    console.log('[ ✓ ] Model loaded!');
}

// Toxicity Check.
app.post('/classify', async (req, res) => {

    const text = req.body?.text;

    try {

        // Model Response.
        const output = await classifier(text, { top_k: null });

        // Round the values so we get integers.
        const labels = output.map((r) => ({
            label: r.label,
            score: Math.round(r.score * 100),
        }));

        // Take the highest value.
        const score = labels.length ? Math.max(...labels.map((l) => l.score)) : 0;

        // Debug output message.
        console.log(`Message: ${text}\n`, output, `\nScore: ${score}`);

        // Return the score and lables.
        res.json({ score, labels });
    } catch (error) {
        // 500 Internal Server Error
        console.error('[ ✗ ]', error);
        res.status(500).json({ error: 'Classification failed.' });
    }
});

// Serve the API.
loadModel()
    .then(() => {
        app.listen(3000, () => {
            console.log(`[ ✓ ] Agent listening on http://localhost:3000`);
        });
    }).catch((error) => {
        console.error('[ ✗ ] Failed to load model:', error);
        process.exit(1);
    });