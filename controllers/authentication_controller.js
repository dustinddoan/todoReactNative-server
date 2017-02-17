const User = require('../models/user')
const jwt = require('jwt-simple')
const config = require('../config')

function tokenForUser(user) {
  var timestamp = new Date().getTime()
  return jwt.encode({
    sub: user.id, //subject
    iat: timestamp //issue at time,
  }, config.secret)
}

exports.signin = function(req, res, next) {
  console.log('signin')
  var user = req.user
  var token = tokenForUser(user)
  console.log(token)
  res.send({token: token, user_id: user._id, user: user})
}

exports.signup = function(req, res, next) {
  console.log(req.body);
  var email = req.body.email
  var password = req.body.password
  if(!email || !password) {
    return res.status(422).json({error: 'Must provide email and pasword'})
  }

  User.findOne({email: email}, function(err, existingUser) {
    if(err) { return next(err)}
    if(existingUser) {
      return res.status(422).json({error: 'Email taken'})
    }
    var user = new User({
      email: email,
      password: password
    })
    user.save((err) => {
      if(err) {return next(err)}
      res.json({user_id: user._id, token: tokenForUser(user)})
    })
  })
}
