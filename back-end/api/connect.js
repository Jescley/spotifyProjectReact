import { MongoClient } from "mongodb";

const URI = "mongodb+srv://jescley:wCDDmJGeHL3CVN7W@cluster0.e7ip62n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// teste de funcionalidade ignora//
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);