Meteor.startup(function() {

  /* EMAIL SETUP */
  Accounts.emailTemplates.siteName = "Saving Throw";
  Accounts.emailTemplates.from = "Automated Message <no-reply@savingthrow.io>";

  Accounts.emailTemplates.resetPassword.from = function() {
    return 'Account Recovery <no-reply@savingthrow.io>';
  };

  Accounts.emailTemplates.resetPassword.subject = function() {
    return 'Account Password Recovery - savingthrow.io';
  };

  Accounts.emailTemplates.resetPassword.text = function(user, url) {
    return 'If you didnt request this password reset, please ignore it. \n\n' +
           'Please click here to reset your password\n\n' + url;
  };

  process.env.MAIL_URL = 'smtp://postmaster%40savingthrow.io:eeb5f700534d7337cfc87737df960422@smtp.mailgun.org:587';

  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset/' + token);
  };

  /* END EMAIL SETUP */

  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'bruce',
      email: 'bruce@bruce.com',
      password: 'blueseph1'
    });
  }

  var firstUser = Meteor.users.find().fetch()[0];

  if (Characters.find().count() === 0) {
    var sampleCharacter = {
      owner: firstUser._id,
      name: 'Bruce Bruce',
      alignment: 'Chaotic Neutral',
      race: 'Human',
      level: 1,
      stats: {
        strength: 18,
        dexterity: 14,
        constitution: 16,
        intelligence: 12,
        wisdom: 12,
        charisma: 8
      },
      equipment: {
        backpack: [{
          name: 'Glaive',
          weight: 18,
          worth: 300000,
          description: 'Lol'
        }]
      }
    };

    Characters.insert(sampleCharacter);
  }

});
