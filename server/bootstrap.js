var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation

Meteor.startup(function() {

  connectHandler.use(function (req, res, next) {

    res.setHeader('Strict-Transport-Security', 'strict-transport-security: max-age=31536000; includeSubdomains');
    res.setHeader('X-Frame-Options', 'x-frame-options: SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Content-Type-Options', 'X-Content-Type-Options: nosniff');

    return next();
  });

  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'bruce',
      email: 'bruce@bruce.com',
      password: 'blueseph1'
    });
  }

});
