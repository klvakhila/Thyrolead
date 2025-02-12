const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/thyroidDB")
.then(() => {
    console.log("port connected")
})
.catch(() => {
    console.log("failed to connect")
})

const loginschema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true, // Ensure uniqueness of email addresses
    //   lowercase: true, // Convert email to lowercase before saving
    //   trim: true, // Remove leading and trailing whitespaces from email
    // },
  
    password:{
        type:String,
        required:true
    },
    predictions: [
        {
          input_data: {
            type: [Number],
            required: true
          },
          prediction: {
            type: Number,
            required: true
          },
          message: {
            type: String,
            required: true
          },
          timestamp: {
            type: Date,
            default: Date.now
          }
        }
      ]
})
const collection = new mongoose.model("newCollection",loginschema)
module.exports = collection