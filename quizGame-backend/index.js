const { url, PORT } = require("./utils/config");
const app=require("./app")
app.listen(PORT)
console.log(`server running in port ${process.env.PORT}`);








