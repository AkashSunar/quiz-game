const bcrypt = require('bcrypt')
const userRoute = require("express").Router();
const QuizUser = require("../models/quizUser")

 
userRoute.get("/", (request, response) => {
    QuizUser.find({}).then((result) => {
        response.json(result);
    })
})
userRoute.get("/:id", (request, response) => {
    const myId = request.params.id;
    QuizUser.findById(myId).then((result) => {
        response.json(result)
    })
})

userRoute.post("/", async (request, response, next) => {
    const body = request.body;

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    
    const user = new QuizUser(
        {
            username: body.username,
            name: body.name,
            passwordHash
        })
    try {
        const savedUser = await user.save();
        response.status(201).json(savedUser)
    } catch (e) {
        next(e);
    }
});
module.exports = userRoute;