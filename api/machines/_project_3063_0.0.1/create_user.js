module.exports = {
  "inputs": {
    "name": {
      "example": "scott",
      "friendlyName": "name",
      "required": true
    },
    "password": {
      "example": "scott",
      "friendlyName": "password",
      "required": true
    },
    "email": {
      "example": "scott",
      "friendlyName": "email",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "name": "scott",
        "password": "scott",
        "email": "scott",
        "id": 123,
        "createdAt": "2015-04-17T02:53:47.087Z",
        "updatedAt": "2015-04-17T02:53:47.087Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.user.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_user"
};