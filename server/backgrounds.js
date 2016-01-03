Meteor.publish('backgrounds', function() {
  return Backgrounds.find();
});

Backgrounds.remove({}); // removes all content

var Acolyte = {
  name: 'Acolyte',
  bonus: {
    proficiencies: ['Insight', 'Religion'],
    language: 2,
  },
  type: 'background'
};

var Charlatan = {
  name: 'Charlatan',
  bonus: {
    proficiencies: ['Deception', 'Sleight of Hand'],
  },
  type: 'background'
};

var Criminal = {
  name: 'Criminal',
  bonus: {
    proficiencies: ['Deception', 'Stealth'],
  },
  type: 'background'
};

var Entertainer = {
  name: 'Entertainer',
  bonus: {
    proficiencies: ['Acrobatics', 'Performance'],
  },
  type: 'background'
};

var GuildArtisan = {
  name: 'Guild Artisan',
  bonus: {
    proficiencies: ['Insight, Persuasion'],
  },
  type: 'background'
};

var Hermit = {
  name: 'Hermit',
  bonus: {
    proficiencies: ['Medicine, Religion']
  },
  type: 'background'
};

var Noble = {
  name: 'Noble',
  bonus: {
    proficiencies: ['History', 'Persuasion']
  },
  type: 'background'
};

var Outlander = {
  name: 'Outlander',
  bonus: {
    proficiencies: ['Athletics', 'Survival']
  },
  type: 'background'
};

var Sage = {
  name: 'Sage',
  bonus: {
    proficiencies: ['Arcana, History']
  },
  type: 'background'
};

var Sailor =  {
  name: 'Sailor',
  bonus: {
    proficiencies: ['Athletics', 'Perception']
  },
  type: 'background'
};

var Soldier = {
  name: 'Soldier',
  bonus: {
    proficiencies: ['Athletics, Intimidation']
  },
  type: 'background'
};

var Urchin = {
  name: 'Urchin',
  bonus: {
    proficiencies: ['Sleight of Hand', 'Stealth']
  },
  type: 'background'
};

Backgrounds.insert(Acolyte);
Backgrounds.insert(Charlatan);
Backgrounds.insert(Criminal);
Backgrounds.insert(Entertainer);
Backgrounds.insert(GuildArtisan);
Backgrounds.insert(Hermit);
Backgrounds.insert(Noble);
Backgrounds.insert(Outlander);
Backgrounds.insert(Sage);
Backgrounds.insert(Sailor);
Backgrounds.insert(Soldier);
Backgrounds.insert(Urchin);
