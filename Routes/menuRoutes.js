const express = require('express');
const router = express.Router();
const menuItem = require('../Model/MenuItem');




router.post('/', async(req, res) => {
    try {
     const data = req.body;
     const newItem = new menuItem(data);
     const response = await newItem.save();
     console.log("saved");
     console.log(response);
     res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json("error:",error)
 
    }
 })
 router.get("/", async(req, res) => {
     try {
         const fetchData = await menuItem.find();
     console.log("data fetched");
     res.status(200).json(fetchData)
     } catch (error) {
         console.log(error);
         res.status(500).json("error:",error)
     }
 })

router.get('/:menuList', async (req, res) => {
    try {
        const data = req.params.menuList;
        if (data === "sweet" || data === "spicy") {
            const response = await menuItem.find();
            console.log(response);
            res.status(200).json(response)
        } else {
            console.log("ERROR");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("error:",error)
    }
 })
 
module.exports = router;