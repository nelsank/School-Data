let express = require('express');
let app = express();
let mongoose = require('./db/mongodb');
let cors = require('cors');
app.use(cors())
app.get('/',(req,res)=>{
    res.send('welcome')
})
let studentcontroller = require('./controllers/studentcontroller');
app.get('/getUsers',studentcontroller.getStudentInfo)
app.listen(4000) 
