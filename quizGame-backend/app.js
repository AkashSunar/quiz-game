console.log("helo akas");
const express = require("express");
const cors = require("cors");
const app = express();
const userControllers = require("./controllers/users");
const loginControllers = require('./controllers/login');
const { errorHandler, unknownEndpoint } = require("./utils/middleware");
const mongoose = require('mongoose');
const { url} = require("./utils/config");

mongoose.set('strictQuery', false);
mongoose.connect(url);


app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.use("/api/users", userControllers);
app.use("/api/login", loginControllers);
app.use(unknownEndpoint);

module.exports = app;