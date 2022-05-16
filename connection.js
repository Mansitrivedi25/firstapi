const mongoose = require("mongoose");
const url =
'mongodb+srv://Mansi:trivedi25@cluster0.flf40.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//this will return promise
mongoose.connect(url) 

.then(() => {
    console.log("database connected");
})
.catch((err)=>{
    console.error(err);
});

module.exports= mongoose;
