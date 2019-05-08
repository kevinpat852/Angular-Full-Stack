const express = require('express');
const http = require('http');
const feedback = express();
const bodyparser = express.json();
const mongoose = require('mongoose');
const Feedback = require('./feedbackSchema');

mongoose.connect(
  "mongodb+srv://kevinp2494:Iw3U3W8D6SjuX6YF@cluster0-bo6dg.mongodb.net/test?retryWrites=true", {useNewUrlParser: true}
)
.then(() => {
  console.log('Connected to database!');
})
.catch(() => {
  console.log('Connection failed!');
});

feedback.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  next();
});

feedback.use(bodyparser);

feedback.post('/addFeedback', (req, res, next) => {
  console.log(req.body);
    const feedbacks = new Feedback({
      feedback: req.body.feedback
    });
    feedbacks.save()
    .then(createdPost => {
      return res.status(201).json({
        message: 'Feedback added successfully!',
        post_id: createdPost._id
      });
    });
});

module.exports = feedback;
