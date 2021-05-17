const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('../server/modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/submit', (req,res) => {
    const review = req.body;
    const query = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`;
              pool.query(query, [review.feeling, review.understanding, review.support, review.comments])
              .then( result => {
                  res.sendStatus(201);
              })
              .catch(err => {
                  console.log('Review not sent to db', err);
                  res.sendStatus(500);
              })  
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});