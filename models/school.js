const mongoose = require("mongoose")
const schoolSchema = mongoose.Schema({
    Name: String,
    Address: {type:String,required:true},
    School_ID: {type:Number,min:0,max:100,required:true}
})
module.exports = mongoose.model("school", schoolSchema)