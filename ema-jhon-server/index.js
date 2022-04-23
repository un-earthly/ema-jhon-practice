import express from "express";
import cors from "cors"


const app = express();
const port = 80;


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => [
    res.send('hello world')
])

app.listen(port)