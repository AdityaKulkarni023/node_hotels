const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:false
    },
    Work: {
        type: String,
        enum:['chef','waiter','manager'],
        required:true
    },
    Mobile: {
        type: Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    address: {
        type: String,
        required:true
    },
    salary: {
        type: Number,
        required:true
    }
})


//models -

const person = mongoose.model('person', personSchema)
module.exports = person;