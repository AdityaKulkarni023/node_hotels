const mongoose = require('mongoose')

const mongoURL = "mongodb://localhost:27017/hotels"

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=> {
    console.log("connected to mongoDB server");
})
db.on('error',(err)=> {
    console.log(" mongoDB server connection error",err);
})
db.on('disconnected',()=> {
    console.log("disconnected to mongoDB server");
})

module.exports=db