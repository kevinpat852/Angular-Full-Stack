const express = require('express');
const http = require('http');
const data = express();
const bodyparser = express.json();
const mongoose = require('mongoose');
const Data = require('./dataSchema');
const Feedback = require('./feedbackSchema');

//H1UYBNiG0kp1wCTe
//mongodb+srv://kevinp2494:H1UYBNiG0kp1wCTe@cluster0-bo6dg.mongodb.net/test?retryWrites=true
mongoose.connect(
  "mongodb+srv://kevinp2494:Iw3U3W8D6SjuX6YF@cluster0-bo6dg.mongodb.net/test?retryWrites=true", {useNewUrlParser: true}
)
.then(() => {
  console.log('Connected to database!');
})
.catch(() => {
  console.log('Connection failed!');
});

data.use((req, res, next) => {
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

data.use(bodyparser);

data.post('/addArtist', (req, res, next) => {
  for (let i=0; i<req.body.length; i++) {
    const artists = new Data({
      stageName: req.body[i].stageName,
      currentLabel: req.body[i].currentLabel,
      yearsActive: req.body[i].yearsActive,
      topSongs: req.body[i].topSongs,
      wikiLink: req.body[i].wikiLink
    });
    artists.save()
    .then(createdPost => {
      return res.status(201).json({
        message: 'Artist added properly!',
        post_id: createdPost._id
      });
    });
  }
});

// data.post('/addFeedback', (req, res, next) => {
//   for (let i=0; i<req.body.length; i++) {
//     const feedback = new Feedback({
//       feedback: req.body[i].feedback
//     });
//     feedback.save()
//     .then(createdPost => {
//       return res.status(201).json({
//         message: 'Feedback added successfully!',
//         post_id: createdPost._id
//       });
//     });
//   }
// });

data.get('/getArtists', (req, res, next) => {
  console.log(req.body);
  Data.find({}).then(input => {
    console.log(input);
    let responseArr = input;
    return res.status(200).json({
      message: "Success!",
      input: responseArr
    });
  });
});

module.exports = data;
