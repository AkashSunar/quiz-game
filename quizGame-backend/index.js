const { url, PORT } = require("./utils/config");
const app=require("./app")
app.listen(PORT)
console.log(`server running in port ${process.env.PORT}`);






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

