const User = require("../../model/User");

module.exports = {
  Query: {
    users: async (root, params) => {
      let users = await User.find();
      return users;
    }
  },
  Mutation: {
    createUser: async (root, params) => {
      let { user } = params;
      console.log(user);
      let userResponse = await User.create(user);
      return userResponse;
    }
  }
};
