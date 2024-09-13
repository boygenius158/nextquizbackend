const express = require('express');
const mongoose = require('mongoose');
const Questions = require('./models/questionModel.js');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const PORT = 4000;
 
// // Connect to MongoDB
const DB= 'mongodb://127.0.0.1:27017/gingerbucket'

 mongoose.connect(DB).then(
  () =>
      console.log("database connected")


).catch(error => {
  console.log("database error", error);
});


app.get('/',(req,res)=>{
    res.send("hello")
})

app.use(bodyParser.json());
app.use(cors());


app.get('/questions',async(req,res)=>{
  console.log("questions asked from user");
  const questions = await Questions.find()
  console.log(questions);
  res.status(200).json(questions)
})
// POST endpoint to handle incoming question data
app.post('/questions',async (req, res) => {
  console.log(req.body);
  // Access the data sent in the POST request from req.body
  const { questionText, options, correctOptionIndex } = req.body;
  const newQuestinon = new Questions({
    questionText,
    options,
    correctOptionIndex
  })

  await newQuestinon.save()
  
  // You can now process the data as needed, e.g., save it to a database

  // Send a response back to the client
  res.status(200).send('Question received successfully');
});





// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
