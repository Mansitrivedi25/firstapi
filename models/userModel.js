const mongoose = require('../connection');

//structure create/ schema
const schema= new mongoose.Schema({
    email:String,
    password :String,
    age:Number,
    createdAt:{type:Date, default:new Date()}
});
const model =mongoose.model("user", schema);

module.exports = model;