console.log("helo akas");
const express = require("express");
const cors = require("cors");
const app = express();
const subjectControllers = require("./controllers/subjects")
const userControllers = require("./controllers/users")
const {errorHandler,unknownEndpoint}=require("./utils/middleware")
const mongoose = require('mongoose')
const {url,PORT}=require("./utils/config")




mongoose.set('strictQuery', false)
mongoose.connect(url)


app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.use("/api/subjects", subjectControllers)
app.use("/api/users", userControllers)
app.use(unknownEndpoint);

module.exports = app;