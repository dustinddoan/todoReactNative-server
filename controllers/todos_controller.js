exports.create = function(req, res, next) {
  var user = req.user
  var text = req.body.text
  var count = user.todos.push({text: text})
  var _id = user.todos[count -1]._id
  user.save(function(err) {
    if(err) {return next(err)}
    res.json({todo: {text: text, _id: _id}})
  })
}

exports.index = function(req, res, next) {
  res.json({todos: req.user.todos})
}

exports.destroy = (req, res) => {
  var user = req.user
  var todo_id = req.params.todo_id
  var todoIndex = user.todos.findIndex((todo) => todo._id == todo_id)
  user.todos.splice(todoIndex, 1)
  user.save(function(err) {
    if(err) {console.log(err)}
    res.json({success: true})
  })

}
// exports.destroy = function(req, res, next) {
//   var user = req.user
//   var todo_id = req.params.todo_id
//   user.todos = user.todos.filter((todo) => {
//     if(todo._id === todo_id) {
//       return false
//     }
//     return true
//   })
//   user.save(function(err) {
//     // if(err) {return next(err)}
//     if(err) {console.log(err);}
//     res.json({sucess: true, delete: todo_id})
//   })
// }
