import express from "express";
import cors from "cors"
import dotenv from 'dotenv'
import mongodb from 'mongodb'
const app = express();
const port = 80;

app.use(cors())
app.use(express.json())
dotenv.config()

// db

const { MongoClient, ServerApiVersion } = mongodb;
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.d7awh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect()



        const productCollection = client.db("emaDB").collection("product")

        //serve everything
        app.get('/product', async (req, res) => {
            console.log()

            const activePage = parseInt(req.query.activePage)
            const productPerPage = parseInt(req.query.productPerPage)
            const query = { pageCount: activePage, productPerPage }
            console.log(query)
            let product;
            activePage || productPerPage ?
                product = await productCollection.find().skip(productPerPage * activePage).limit(productPerPage).toArray()
                :
                product = await productCollection.find().toArray()
            res.send(product)
        })

        // pagination

        app.get('/productCount', async (req, res) => {
            const count = await productCollection.find().count()
            res.send({ 'productCount': count })
        })


    }
    finally {

    }
}
run()
// db

app.get('/', (req, res) => [
    res.send('hello world')
])

app.listen(port)