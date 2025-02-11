var mongoose = require("mongoose");
var contactList = mongoose.model("contacts");

module.exports= ((app)=>{
    return {
        getContactInfo: async function(req,res){
            try{
                let info = await contactList.find();
                res.send(info);
            }
            catch(e){
                res.send(e)
            }
        },
        saveContacts: async function(req, res) {
            let contact = new contactList(req.body);
            console.log(contact)
            try{
               let contactData = contact.save();
               res.send(contactData);
            }
            catch(e){
                res.send(e)
            }
        },
        deleteContact: async function(req, res){
            try{
                let resData = await contactList.findOneAndDelete({"_id": req.params.id});
                res.send(resData)
            }
            catch(e){
                res.send(e)
            }
          
            
        },
        updateContact: async function(req, res){
            try{
                let contactdata = await contactList.findById({"_id": req.params.id});
                for(prop in req.body) {
                    contactdata[prop] = req.body[prop];
                }
                let res = await contactdata.save();
                response.send(res)
            }
            catch(e){
                res.send(e)
            }
  
        }

    }
})();