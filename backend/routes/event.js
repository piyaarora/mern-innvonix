const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const auth = require('../middlewares/auth')
const multer = require('multer')
const upload = require('../middlewares/ImageUploadConfig');

    

const {check,validationResult} = require('express-validator');

const Event = require('../models/Event');


// Add event
router.post('/addevent',[
    // check('title','Please add title').not().isEmpty(),
    // check('description','Please add description').not().isEmpty(),
],upload.single('prodImage'),
async (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        });
    }
   
    const {title,description,category,prodImage} = req.body;
    req.body.prodImage = req.file.filename;

    try {
        // add new event
        events = new Event({
            ...req.body
            // title,
            // description,
            // category,
            // prodImage
        })
      
        // saving user
        await events.save();
        res.json(events)
       
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }
})

// get event
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});

// update event
router.put('/:id', async (req, res) => {
    const { title, description, category } = req.body;

    // Build event object
    const eventFields = {};
    if (title) eventFields.title = title;
    if (description) eventFields.description = description;
    if (category) eventFields.category = category;

    try {
        let events = await Event.findById(req.params.id);

        if (!events) return res.status(404).json({ msg: 'event not found' });


        events = await Event.findByIdAndUpdate(
            req.params.id,
            { $set: eventFields },
            { new: true },
        );

        res.json(events);
    } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let events = await Event.findById(req.params.id);

        if (!events) return res.status(404).json({ msg: 'event not found' });

        await Event.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Event removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;