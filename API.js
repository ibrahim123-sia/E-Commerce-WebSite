
const express = require('express');
const connectDB = require('./mongodb');  
const cors = require('cors');
const app = express();

app.use(express.json()); 
app.use(cors());         


app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const collection = await connectDB();

    if (!collection) {
      return res.status(500).json({ success: false, message: 'Database connection error' });
    }

    const existingUser = await collection.findOne({ email }); 

    if (!existingUser) {      
      const result = await collection.insertOne({ name, email, password });
      res.status(201).json({ success: true, message: 'User registered successfully', result });
    } 
    else {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }   
  } 
  catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


app.get('/login', async (req, res) => {
  const { email, password } = req.query;

  try {
    const collection = await connectDB();  
    
    const user = await collection.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email' });
    }
    
    if (user.password !== password) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    res.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});



// PUT API to update an existing document
/*
app.put('/update', async (req, res) => {
  let data = await dbConnect();
  let result = await data.updateOne({ name: req.body.name }, { $set: req.body });  // Update document where name matches
  res.send(result);  // Send the update result
});
*/

// DELETE API to remove a document by ID
/*
app.delete('/:id', async (req, res) => {
  let data = await dbConnect();
  let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });  // Delete by ID
  res.send(result);  // Send the delete result
});
*/

// Starting the server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
