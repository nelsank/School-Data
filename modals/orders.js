let mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    school_id: {type: String},
    gateway: {type: String},
    order_amount: {type: String},
    transaction_amount:{type: String},
    amount: {dno: String,street: String,city:String},
    status: {type: String},
    custom_order_id:{type: String},
    ins_name: {dno: String,street: String,city:String},
    payment_method: {type: String},
    student_name:{type: String},
    phone_no: {dno: String,street: String,city:String},
    vendor_amont: {type: String},
    createdDate: {type: Date, default: Date.now},
    lastModified: {type: Date, default: Date.now},
    isDeleted: {type: Boolean, default: false}
})

module.exports = mongoose.model('orders',orderSchema)