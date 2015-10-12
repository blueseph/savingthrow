Meteor.startup(function() {

  if (Characters.find().count() === 0) {
    var sampleCharacter = {
      name: 'Bruce Bruce',
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
