import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

// funcoes de escuta 
app.get("/artistS", async (request, response) => {
    response.send(await db.collection('artists').find({}).toArray());
});

app.get("/songs", async (request, response) => {
    response.send(await db.collection('songs').find({}).toArray());
});

app.listen(PORT, () => {
    console.log(`servidor escutando a porta ${PORT}`);
});