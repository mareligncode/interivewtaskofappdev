import mongoose from 'mongoose';
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required field"]
    },
    email:{
        type:String,
        required:[true,"email is required field"]
    },
    phone:{
        type:String,
        required:[true,'phone is required field please fill that']
    },
    message:{
        type:String
    },
    otherAdress:{
        type:String
    }
    },
    {
        timeStamp:true
    })

    const Contact=mongoose.model("contact",contactSchema)
    export default Contact

    