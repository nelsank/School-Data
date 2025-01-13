let mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00.v7mka.mongodb.net:27017,cluster0-shard-00-01.v7mka.mongodb.net:27017,cluster0-shard-00-02.v7mka.mongodb.net:27017/?ssl=true&replicaSet=atlas-mo05rj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('connect success')).catch((err)=>{
    console.log('connection failed')
})
require('../modals/status');
require('../modals/orders');