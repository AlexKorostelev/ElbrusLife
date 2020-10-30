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
        // schedules.forEach(e => {

        //     console.log( e);
        // });
        schedules.lesson.forEach(e => {
            if (e._id == req.params.ib) {
                res.render('redSchedules', { idSched: ds, idScheds: e._id, nameLesson: e.nameLesson, timeLesson: e.timeLesson })
                //   console.log(e.timeLesson);
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
        schedules.lesson.forEach(async e => {
            if (e._id == req.params.ib) {
                e.timeLesson = timeLesson;
                e.nameLesson = nameLesson;
                console.log(e.nameLesson);
                await e.save();
                res.status(200).end();
                // res.render('schedules')
                //   console.log(e.timeLesson);
            }
        }
        )
    });

module.exports = router;