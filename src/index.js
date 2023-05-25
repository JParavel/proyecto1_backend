import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.get('/', (req, res) => res.status(200).json({ status: '🐋' }));

try {
	app.listen(port);
	console.log('server running on http://localhost:' + port);
} catch (error) {
	console.log(error);
}
