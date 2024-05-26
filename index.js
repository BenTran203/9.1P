const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db('personal');
    const collection = db.collection('testCollection');

    // Create
    await collection.insertOne({ message: "Hello, World!" });
    console.log("Document created");

    // Read
    const doc = await collection.findOne({ message: "Hello, World!" });
    console.log("Document read:", doc);

    // Update
    await collection.updateOne({ message: "Hello, World!" }, { $set: { message: "Hello, MongoDB!" } });
    console.log("Document updated");

    // Delete
    await collection.deleteOne({ message: "Hello, MongoDB!" });
    console.log("Document deleted");

  } catch (err) {
    console.error("Failed to perform CRUD operations on MongoDB", err);
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
}

run().catch(console.dir);
