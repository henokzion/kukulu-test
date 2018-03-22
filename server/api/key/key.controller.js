var Key = require('./key.model');
function generatePassword() {
        var length = 6,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
var getKeys = (req, res)=>{
    Key
        .find()
        .exec((err, keys)=>{
            if(err){
                res.status(400).json(err);
                return;
            }

            res.status(200).json(keys);
        })
}

var generateKeys = (req, res)=>{
    var key = new Key();
    key.user_name = req.body.user_name;
    key.generated_key = generatePassword();
    key.save();
    res.status(201).json(key);
}

var useKey = (req, res)=>{
    Key
        .find({generated_key : req.body.key})
        .exec((err, key)=>{
            if(err){
                res.status(400).json(err);
                return;
            }else if(key.length === 0){
                res.status(404).json({"message" : "key NOt found"})
            }else{
                res.status(200).json({
                    "verified" : "true"
                });
            }
        })    
}

module.exports = {
    getKeys,
    generateKeys,
    useKey
}