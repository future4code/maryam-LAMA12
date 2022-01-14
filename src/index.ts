import dotenv from "dotenv";
import express from "express";

dotenv.config();    

const app = express();

app.use(express.json());


const server = app.listen(3000, () => {
    if (server) {
        console.log(`Servidor Pronto!`);
    } else {
        console.error(`Falha ao rodar o servidor.`);
    }
});