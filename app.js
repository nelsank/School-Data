let express = require('express');
let app = express();
let mongoose = require('./db/mongodb');
let cors = require('cors');
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send('welcome')
})
let contactcontroller = require('./controllers/contactcontrollers');
app.get('/getcontacts',contactcontroller.getContactInfo)
app.post('/savecontacts',contactcontroller.saveContacts)
app.put('/updatecontact/:id',contactcontroller.updateContact)
app.delete('/deletecontact/:id',contactcontroller.deleteContact)
app.listen(4000) 
