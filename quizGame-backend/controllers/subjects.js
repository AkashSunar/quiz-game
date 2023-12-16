const app = require("express").Router(); 
const Subject = require("../models/subject")

app.get("/", (request, response) => {
    Subject.find({}).then((result) => {
        response.json(result);
    })
})
app.get("/:id", (request, response) => {
    const myId = request.params.id;
    Subject.findById(myId).then((result) => {
        response.json(result)
    })
})
app.post("/", (request, response) => {
    console.log("checking code")
    const body = request.body;
    console.log(body, 'body')
    const subject1 = new Subject({
        subject: body.subject
    });
    subject1.save().then((result) => {
        response.json(result)
    }).catch(err => {
        console.log(err,"testing the error")
    }
    )
})
module.exports = app;