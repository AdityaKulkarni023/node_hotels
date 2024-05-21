const express = require('express')
const router = express.Router();
const person=require('../Model/Person');


router.post('/', async(req, res) => {
    try {
        const data = req.body;
        const newPerson = new person(data)
        const response = await newPerson.save();
        console.log("saved");
        console.log(response);
        res.status(200).json(response);
   } catch (error) {
        console.log(error);
        res.status(500).json("internal server error",error);

   }
})


router.get('/', async(req, res) => {
    try {
        const data = await person.find()
        console.log('data fetched');
     res.status(200).json(data);
    } catch (error) {
     console.log(error);
     res.status(500).json("internal server error",error);
 
    }
 })
 
 router.get('/:workType', async (req, res) => {
     try {
         const workType = req.params.workType;
         if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
             const response = await person.find({ Work: workType });
             console.log(response);
             res.status(200).json(response);
         } else {
             res.status(500).json("invalid work type")
         }
     } catch (error) {
         console.log(error);
         res.status(500).json("internal server error",error);
     }
 })


router.put('/:person_id', async(req, res) => {
     try {
         const personId = req.params.person_id;
         const updatepersonData = req.body;

         const response = await person.findByIdAndUpdate(personId, updatepersonData);

         if (!response) {
             res.status(404).json("person id doesnt exist")
         }

         console.log(response);
         res.status(200).json(response);
     } catch (error) {
        console.log(error);
        res.status(500).json("internal server error",error);
     }
})
 
router.delete('/:person_id', async (req, res) => {
    try {
        const personId = req.params.person_id;
        const response = await person.findByIdAndDelete(personId);
        console.log(response);
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json("internal server error",error);
    }
})

module.exports = router;