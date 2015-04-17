module.exports.routes = {
  "post /signup": "SignupController.create",
  "post /user": "UserController.post_create",
  "get /user": "UserController.get_find",
  "get /": "Home$Controller.find",
  "put /user/:id": "UserController.put_$id",
  "get /user/:id": "UserController.get_$id",
  "delete /user/:id": "UserController.delete_$id"
};