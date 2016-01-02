Meteor.startup(function() {

  Accounts.emailTemplates.siteName = "Saving Throw";
  Accounts.emailTemplates.from = "Saving Throw <no-reply@savingthrow.io>";

  Accounts.emailTemplates.resetPassword.from = function() {
    return 'Saving Throw';
  };

  Accounts.emailTemplates.resetPassword.subject = function() {
    return 'Account Password Recovery - savingthrow.io';
  };

  Accounts.emailTemplates.resetPassword.text = function(user, url) {
    return 'If you didnt request this password reset, please ignore it. \n\n' +
           'Please click here to reset your password\n\n' + url;
  };

  process.env.MAIL_URL = 'smtp://postmaster%40savingthrow.io:' + Meteor.settings.private.MailApiKey + '@smtp.mailgun.org:587';

  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset/' + token);
  };

});
