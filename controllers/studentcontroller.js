const status = require('../modals/status');
const orders = require('../modals/orders');
module.exports= ((app)=>{
    return {
        getStudentInfo: async function(req,res){
            try{

                let info = await orders.aggregate([
                    {
                        "$lookup" : {
                          localField : "_id",
                          from : "status",
                          foreignField : "collect_id",
                          as : "users"
                        }
                    },
                    {  $unwind: "$users"},
                    { $project: { 
                        "_id": 1,
                        "school_id":1,
                        "trustee_id": 1,
                        "gateway": 1,
                        "order_amount":1,
                        "custom_order_id": 1,
                        "collect_id": "$users.collect_id",
                        "status": "$users.status",
                        "payment_method": "$users.payment_method",
                        "gateway":"$users.gateway",
                        "transaction_amount":"$users.transaction_amount",
                        "bank_refrence":"$users.bank_refrence",
                        "ins_name":1,
                        "student_name":1,
                        "phone_no":1,
                        "vendor_amount":1
                     } 
                    },
                    
                ])
                
                res.send(info)
            }
            catch(e){
                res.send(e)
            }


        }
    }
})();