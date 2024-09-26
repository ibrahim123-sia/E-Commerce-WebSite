const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'; 
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connectDB = async () => {
  try {
    await client.connect();  
    console.log('Connected to MongoDB successfully');    
    const db = client.db("Database");  
    return db.collection("UserData");   }
  
  catch (error) {
    console.error("Connection error:", error);
    return null;  
  }
};

module.exports = connectDB;
