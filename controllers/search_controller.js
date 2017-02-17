var Yelp = require('yelp-api-v3');

// var yelp = new Yelp({
//   app_id: process.env.APP_ID,
//   app_secret: process.env.APP_SECRET
// });
var yelp = new Yelp({
  app_id: 'hCgm-d0QEbkDLs2b0IWLpQ',
  app_secret: 'qmMKtkcF50NEtRtxS5GRPhxkseXhUZr2GGbLQb0VeyspVm08fjlKMzzV8Ij5Per1'
});

exports.search = function(req, res, next) {
  yelp.search({term: 'food', location: '90210', price: '1,2,3', limit: 10})
    .then(function (data) {
        res.send(data)
    })
    .catch(function (err) {
        console.error(err);
    });
}


// const
//   Yelp = require('yelp')
//
// var yelp = new Yelp({
//   consumer_key: process.env.CONSUMER_KEY,
//   consumer_secret: process.env.CONSUMER_SECRET,
//   token: process.env.TOKEN,
//   token_secret: process.env.TOKEN_SECRET,
//   });
//
// exports.search = function(req, res, next) {
//   yelp.search({ term: 'food', location: 'Montreal' })
//   .then(function (data) {
//     res.json(data);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });
// }
