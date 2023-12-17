
const app = require("./app");
const mongoose = require("mongoose");

const DB = "mongodb+srv://NEEL:NEEL@cluster0.i9mosao.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then((con) => {
  console.log("DB CONNECTION DONE :)");
  
});

// SERVER START :
// console.log("MODE (server.js) : ", process.env.NODE_ENV);
const port =  3001;
app.listen(port, () => {
  console.log(`Running on port - ${port}..`);
});