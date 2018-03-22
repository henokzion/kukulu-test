var mongoose = require("mongoose");

var key = mongoose.Schema({
    user_name : String,
    generated_key : String,
    created_at : {
        type : Date ,
        "default" : Date.now()
    }
});

module.exports = mongoose.model("Key", key);