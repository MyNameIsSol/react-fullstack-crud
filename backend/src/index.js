import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Backend</h1>')
});

app.listen(port, () => {
    console.log("Listening on port 3000");
});
