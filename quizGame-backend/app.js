console.log("helo akas");
const express = require("express");
const cors = require("cors");
const app = express();
const subjectControllers=require("./controllers/subjects")
const mongoose = require('mongoose')
const {url,PORT}=require("./utils/config")




mongoose.set('strictQuery',false)
mongoose.connect(url)


app.use(express.json());
app.use(cors());

app.use("/api/subjects",subjectControllers)

// const subject = new Subject({
//   subject: 'English'

// })

// subject.save().then(result => {
//   console.log('subject saved!')
//   mongoose.connection.close()
// })




// const subjects = [{id:1,subject:"english"},{id:2,subject:"mathematics"},{id:3,subject:"nepali"}]


// app.post("/api/subjects", (request.response) = {
    
// })

module.exports = app;