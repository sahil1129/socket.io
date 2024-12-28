import express from "express";
import http from "http";
import { config } from "dotenv";
import path from "path";


config();
const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 4000;



app.use(express.static(path.resolve('./public')));
// app.router();

app.get('/',(req,res) => {
    return res.sendFile(path.resolve('public/index.html'))
})


server.listen(port, () => {
    console.log("Wow server is working fine")
    console.log(`Server is running on ${port} `)
})
