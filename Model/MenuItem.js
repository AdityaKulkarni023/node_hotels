const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    taste: {
        type: String,
        enum:["sweet","spicy"],
        required:true
    },
    ingredients: {
        type: String,
        enum:["chicken wings","burger","sauce"]
    },
    num_sales:{
    type: Number,
    default: 0
    }
})

const MenuItem = mongoose.model('MenuItem', menuSchema);
module.exports = MenuItem;