// Importing Mongo DB and inserting username and password
let { MongoClient, ServerApiVersion } = require('mongodb');
let uri = "mongodb+srv://sarbottam_:mongodbpassword@clusterdevelopment.20pbivv.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDevelopment";


// Mongo db connection
let client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// Creating function instead of directly connecting client to catch if there is any error
async function connectDB() {
  try {
   // Connecting the client to the server
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { client, connectDB };
