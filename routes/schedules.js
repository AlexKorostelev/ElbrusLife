const express = require('express');
const Schedule = require('../models/schedule.js');

const router = express.Router();


/* GET home page. */

router
    .get('/', async (req, res) => {
        res.render('schedules');
    })
    .post('/', async (req, res) => {
        const { phase, week, day } = req.body;
       const schedules = await Schedule.findOne({ phase, week, day });
        res.json(schedules.lesson);
    });




module.exports = router;