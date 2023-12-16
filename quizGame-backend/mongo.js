const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://akash:${password}@cluster0.htwown0.mongodb.net/quizApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const subjectSchema = new mongoose.Schema({
    subject: String
})

const Subject= mongoose.model('Subject', subjectSchema)

const subject = new Subject({
  subject: 'nepali'

})

subject.save().then(result => {
  console.log('subject saved!')
  mongoose.connection.close()
})