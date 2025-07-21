//SET UP BACKEND SERVER
import express from 'express';
import cors from 'cors';

import clientRoutes from "./routes/clientRoute.js"; //import the rountes from clientRoute.js so here will be aware of it

const app = express();
const port = 3000;

app.use(cors()); //HANDLES CONNECTION BETWEEN THE BACKEND AND THE FRONTEND, PERFORMING SECURITY CHECKS FOR BOTH STACKS CONNECTION
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to Backend</h1>')
// });
app.use('/api', clientRoutes);

app.listen(port, () => {
    console.log("Listening on port 3000");
});
