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
