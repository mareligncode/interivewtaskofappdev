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
