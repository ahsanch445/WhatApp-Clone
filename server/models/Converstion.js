var mongoose = require("mongoose")
 const converstionSchema = mongoose.Schema({
    conver:{
        type:Array
    },
    massage:String
})
module.exports = mongoose.model("converstion",converstionSchema)