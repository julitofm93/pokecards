import express from 'express';
import dotenv from 'dotenv'

const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>console.log(`Listen on ${PORT}`))

app.use(express.static('public'))
app.use(express.json());

app.get('/',(req,res)=>{
    console.log('Hola')
})