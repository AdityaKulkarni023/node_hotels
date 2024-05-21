const express = require('express');
const router = express.Router();
const Hotel = require('../Model/Hotel')


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newHotel = new Hotel(data);
        const response = await newHotel.save(); // Corrected the spelling of await
        console.log("saved ", response);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" }); // Fixed the error response format
    }
});
router.get('/', async (req, res) => {
   try {
    const fetchedData = await Hotel.find();
    console.log(fetchedData);
    res.status(200).json(fetchedData);
   } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" }); 
   }
})

module.exports = router;