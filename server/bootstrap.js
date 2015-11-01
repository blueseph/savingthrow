Meteor.startup(function() {

  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'bruce',
      email: 'bruce@bruce.com',
      password: 'blueseph1'
    });
  }

});
