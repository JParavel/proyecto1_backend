import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

try {
	app.listen(port);
	console.log('server running on http://localhost:' + port);
} catch (error) {
	console.log(error);
}
