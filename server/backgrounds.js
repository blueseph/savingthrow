Meteor.publish('backgrounds', function() {
  return Backgrounds.find();
});

Backgrounds.remove({}); // removes all content

var Acolyte = {
  name: 'Acolyte',
  bonus: {
    proficiencies: ['Insight', 'Religion'],
    language: 2,
  }
};

var Charlatan = {
  name: 'Charlatan',
  bonus: {
    proficiencies: ['Deception', 'Sleight of Hand'],
  }
};

var Criminal = {
  name: 'Criminal',
  bonus: {
    proficiencies: ['Deception', 'Stealth'],
  }
};

var Entertainer = {
  name: 'Entertainer',
  bonus: {
    proficiencies: ['Acrobatics', 'Performance'],
  }
};

var GuildArtisan = {
  name: 'Guild Artisan',
  bonus: {
    proficiencies: ['Insight, Persuasion'],
  }
};

var Hermit = {
  name: 'Hermit',
  bonus: {
    proficiencies: ['Medicine, Religion']
  }
};

var Noble = {
  name: 'Noble',
  bonus: {
    proficiencies: ['History', 'Persuasion']
  }
};

var Outlander = {
  name: 'Outlander',
  bonus: {
    proficiencies: ['Athletics', 'Survival']
  }
};

var Sage = {
  name: 'Sage',
  bonus: {
    proficiencies: ['Arcana, History']
  }
};

var Sailor =  {
  name: 'Sailor',
  bonus: {
    proficiencies: ['Athletics', 'Perception']
  }
};

var Soldier = {
  name: 'Soldier',
  bonus: {
    proficiencies: ['Athletics, Intimidation']
  }
};

var Urchin = {
  name: 'Urchin',
  bonus: {
    proficiencies: ['Sleight of Hand', 'Stealth']
  }
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
