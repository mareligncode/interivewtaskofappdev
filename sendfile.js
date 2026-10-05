server.js

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDatabase from './config/database.js'
import contactRoute from './routes/contact.js'
dotenv.config()
connectDatabase()
const PORT=process.env.PORT||5000
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.get('/',(req,res)=>{
    res.send('server is live')
})
app.use('/api',contactRoute)
app.listen(PORT,()=>{
    console.log(`server runing on the port http://localhsot:${PORT}`)
})

contact.js  model  
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

    
    controller.js
    import Contact from '../models/Contact.js'
import dotenv from 'dotenv'
dotenv.config()
export const createContact=async(req,res)=>{
    try{
        const {name,email,phone,message,otherAdress}=req.body;
          const Contacts=await Contact.create({
            name:name,
            email:email,
            phone:phone,
            message:message,
            otherAdress:otherAdress
          })
          if(name=="" || email=="" || phone==""){
            return res.status(400).json({
                success:false,
                message:"please fill all required field"
            })
          }
          return res.status(201).json({
            success:true,
            message:'contanct information created perfeclty',
            data:Contacts

          })

    }catch(err){
return res.status(501).json({
    success:false,
    message:"internal server erro please cekc your backend"
})
    }
}
export const getAllContactDetail=async(req,res)=>{
    try{
        const Contacts= await Contact.find({})
        // if(!Contact){
        //     return res.status(404).josn({
        //         success:false,
        //         message:"no contact found"
        //     })
        // }

        return res.status(200).json({
            success:true,
            message:"all contact feched",
            data:Contacts

        })
    }
    catch(err){
        return res.status(501).json({
            success:false,
            message:"internal server error please check your backend"
        })
    }
}
export const getSingleContact=async(req,res)=>{
    try{
const {id}=req.params
const singleContacts=await Contact.find(id)
// if(!singleContact){
//     return res.satatus(404).json({
//         success:false,
//         message:"cpntact not found"
//     })
// }
return res.status(200).json({
    success:true,
    message:"single contact perfeclty feched",
    data:singleContacts
})
    }catch(err){
        return res.status.json({
            success:false,
            mesage:"internal server error"
        })

    }
}
export const updateContact=async(req,res)=>{
    try{
const {id}=req.params
const {name,email,phone,message,otherAdress}=req.body
const updatedContact={name,email,phone,message,otherAdress}
const updateContact=await Contact.findByIdAndUpdate(id,updatedContact,{
    new:true,
    runValidators:true
})
return res.status(200).json({
    success:true,
    message:"all iof updated perfecty",
    data:updateContact
})
    }catch(err){
return res.status(501).json({
    suuccess:false,
    message:"internal sevrer error"
})
    }
}
export const deleteContact=async(req,res)=>{
    try{
        const {id}=req.params
        const deletedContact=await Contact.findByIdAndDelete(id)
        if(!deletedContact){
            return res.status(500).josn({
                success:false,
                message:"faield to delted the cotact"
            })
        }
        return res.status(200).json({
            success:true,
            message:"contact deleted successfully",
            data:deletedContact 
        })
    }catch(err){
        return res.status(501).json({
            success:false,
            message:"internals erver erorr"
        })
    }
}

routes
import express from 'express'
import { createContact,
    getAllContactDetail,
    getSingleContact,
updateContact,
deleteContact }  from '../controllers/contact.js'
const router=express.Router()
router.post('/create',createContact)
router.get('/getallcontacts',getAllContactDetail)
// router.get('contacts',getAllContactDetail)
router.get('/getcontact/:id',getSingleContact)
router.put('/updatecontact/:id',updateContact)
router.delete('/deletecontact/:id',deleteContact)
export default router

dstabse.js  
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
const connectDatabase=async()=>{
    try{
await mongoose.connect(process.env.MONGO_URI)
console.log("dataase conncted successfully")
    }catch(err){
        console.log(`faild to connect databse`,err)

    }
}
export default connectDatabase


.env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/appdivcrude


2.
const leader=["aebbe","kebede","alemu","deribie"]
export const [name,age,gender,city]=leader
export default{name,age,gender,city}



3.

function leavecaluclation(){
    const anualleave=20
    const leaveaddperyear=1
    const maxnaualleave=30
    const takenleave =currentdate-newdate
    const fromprevyear=5
    let newleave =anualleave+leaveaddperyear
    if(newleave>maxnaualleave){
        newleave=maxnaualleave
    }
    if(newleave>takenleave){
        newleave=newleave-takenleave
    }
    if(newleave>fromprevyear){
        newleave=newleave-fromprevyear
    }
    return newleave
}
  console.log(leavecaluclation())
