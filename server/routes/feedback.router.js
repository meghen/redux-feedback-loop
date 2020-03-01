const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// POST full feedback to db
router.post('/',  (req, res) => {
    console.log('in POST', req.body);
    const feedback = req.body;
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;
    pool.query(queryString, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(result =>{
        res.sendStatus(201);
    }).catch(err =>{
        res.sendStatus(500)
    })
});

module.exports = router;
