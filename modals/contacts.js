let mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    phone:{type: String},
    address: {type: String},
    createdDate: {type: Date, default: Date.now},
    lastModified: {type: Date, default: Date.now},
    isDeleted: {type: Boolean, default: false}
})

module.exports = mongoose.model('contacts',contactSchema)