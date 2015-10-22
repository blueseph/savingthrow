Meteor.startup(function() {

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

  Meteor.publish('content', function() {
    return Content.find();
  });

  Meteor.publish('items', function() {
    return Items.find();
  });

});
