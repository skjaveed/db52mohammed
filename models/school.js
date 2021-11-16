const mongoose = require("mongoose")
const schoolSchema = mongoose.Schema({
    Name: String,
    Address: String,
    School_ID: Number
})
module.exports = mongoose.model("school", schoolSchema)