const mongoose = require('mongoose')
const quizUserSchema = new mongoose.Schema({
  username: String,
  name: String,
  passwordHash: String
})


quizUserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash;
  }
})

module.exports = mongoose.model('QuizUser', quizUserSchema)