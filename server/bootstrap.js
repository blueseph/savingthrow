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

  if (Content.find().count() === 0) {
    var content =  {
      'en-us': {
        races: ['Dwarf', 'Elf', 'Halfing', 'Human', 'Dragonborn', 'Gnome', 'Half-elf', 'Orc', 'Tiefling', 'Aasimar [DMG]', 'Aarakocra [EE]', 'Genasi [EE]', 'Goliath [EE]',
                        'Changeling [UA]', 'Shifter [UA]', 'Warforged [UA]', 'Minotaur [UA]'],
        proficiencies: [ 'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Survival', 'Stealth'],
        subraces:  {
          'Dwarf': ['Hill', 'Mountain'],
          'Elf': ['High', 'Wood', 'Drow', 'Eladrin [DMG]'],
          'Halfling': ['Lightfoot', 'Stout'],
          'Human': ['Standard', 'Variant'],
          'Gnome': ['Forest', 'Rock', 'Deep [EE]'],
          'Genasi [EE]': ['Air', 'Earth', 'Fire', 'Water'],
          'Shifter [UA]': ['Beasthide', 'Cliffwalk', 'Longtooth', 'Razorclaw', 'Wildhunt']
        },
        classes: [ 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'],
        backgrounds: [ 'Acolyte', 'Charlatan', 'Criminal', 'Spy', 'Entertainer', 'Gladiator', 'Folk Hero', 'Guild Artisan', 'Guild Merchant', 'Hermit', 'Noble', 'Knight', 'Outlander', 'Sage', 'Sailor', 'Pirate', 'Soldier', 'Urchin'],
        pages: {
          create: {
            race: {
              Entry: 'Select a class to see the benefits it brings',
              Human: {
                large: '<h5>Humans</h5><p>Humans are kind of boring sry</p>',
                cliff: '<ul><li><strong>Speed:</strong> 30 feet</li><li><strong>Size:</strong> 5-6 ft.</li><li><strong>Languages:</strong> Common, bonus language</li><li><strong>Ability Score Bonus:</strong> +1 to all</li></ul>',
                subraces: {
                  Standard: {
                    large: 'Standard humans enjoy no ',
                    cliff: '<ul><li><strong>Speed:</strong> 30 feet</li><li><strong>Size:</strong> 5-6 ft.</li><li><strong>Languages:</strong> Common, bonus language</li><li><strong>Ability Score Bonus:</strong> +1 to all</li></ul>',
                  },
                  Variant: {
                    large: 'Hello I am from the variant thing!',
                    cliff: '<ul><li><strong>Speed:</strong> 30 feet</li><li><strong>Size:</strong> 5-6 ft.</li><li><strong>Languages:</strong> Common, bonus language</li><li></li><hr><li><strong>Subrace Bonus:</strong> Bonus Feat</li><li><strong>Subrace Bonus:</strong> +1 to two ability scores</li><li><strong>Subrace Bonus:</strong> Bonus Skill</li></ul>'
                  }
                }
              },
              Elf: {
                large: 'Elves live a long time and are hoighty toighty',
                cliff: 'They see stuff in the dark',
                subraces: {
                  High: {

                  },
                  Wood: {

                  },
                  Drow: {

                  },
                  'Eladrin [DMG]': {

                  }
                }
              }
            }
          }
        }
      }
    };

    Content.insert(content);
  }

  Meteor.publish('content', function() {
    return Content.find();
  });

});
