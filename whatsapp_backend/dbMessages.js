// import mongoose from 'mongoose';
const mongoose =require('mongoose');

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})

// export default mongoose.model('messageContent', whatsappSchema);
module.exports =  mongoose.model('messageContent', whatsappSchema);