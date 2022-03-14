var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.254.176:27017/test',{useNewUrlParser:true,useUnifiedTopology: true},function(err){
    if(err){
        console.log('Connection Error:' + err)
    }else{
        console.log('mongoose Connection success!')
    }
});

module.exports = mongoose;