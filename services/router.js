const passport = require('passport');

const AuthenticationController = require('../controllers/authentication_controller')
const SearchController = require('../controllers/search_controller')
const TodosController = require('../controllers/todos_controller')
const passportService = require('./passport')

var requireAuth = passport.authenticate('jwt', {session: false})
var requireLogin = passport.authenticate('local', {session: false})
var router = require('express').Router()


router.route('/signup')
  .post(AuthenticationController.signup)

router.route('/signin')
  .post([requireLogin, AuthenticationController.signin])

router.route('/search')
  .post(SearchController.search)

router.route('/users/:user_id/todos')
  .post(requireAuth, TodosController.create)
  .get(requireAuth, TodosController.index)

module.exports = router
