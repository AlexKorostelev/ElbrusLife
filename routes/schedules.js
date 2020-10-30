const express = require('express');
const Schedule = require('../models/schedule.js');

const router = express.Router();


/* GET home page. */

router
    .get('/', (req, res) => {
        res.render('schedules');
    })
    .get('/:id/:ib', async (req, res) => {
        const schedules = await Schedule.findById(req.params.id);
        const ds = req.params.id
        schedules.lesson.forEach((e, index) => {
            if (index == req.params.ib) {
                res.render('redSchedules', { idSched: ds, idScheds: index, nameLesson: e.nameLesson, timeLesson: e.timeLesson })
            }
        }
        )
    })
    .post('/', async (req, res) => {
        const { phase, week, day } = req.body;
        const schedules = await Schedule.findOne({ phase, week, day });
        res.json(schedules);
    })
    .post('/:id/:ib', async (req, res) => {
        const { timeLesson, nameLesson } = req.body;
        const schedules = await Schedule.findById(req.params.id);
        console.log(schedules);
            for (let i = 0; i < schedules.lesson.length; i++) {
                const e = schedules.lesson[i];
                if (i == req.params.ib) {
                    schedules.lesson[i].timeLesson = timeLesson;
                    schedules.lesson[i].nameLesson = nameLesson;
                    console.log(schedules.lesson[i].nameLesson, 
                        '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                        schedules.markModified('lesson');
                    }
                }
                await schedules.save();
            res.status(200).end();

    });




module.exports = router;