const mongoose= require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.sl7cyit.mongodb.net/?retryWrites=true&w=majority`)  .then(() => {
    // Connection successful, add your logic here
    console.log("Connected")
  })
  .catch((error) => {
    // Connection failed, handle the error
    console.error('Error connecting to the database:', error);
  });

