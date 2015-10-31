Meteor.publish('backgrounds', function() {
  return Backgrounds.find();
});

Backgrounds.remove({}); // removes all content

var Acolyte = {
  name: 'Acolyte',
  bonus: {
    skill: ['Insight', 'Religion'],
    language: 2,
  }
};

var Charlatan = {
  name: 'Charlatan',
  bonus: {
    skill: ['Deception', 'Sleight of Hand'],
  }
};

var Criminal = {
  name: 'Criminal',
  bonus: {
    skill: ['Deception', 'Stealth'],
  }
};

var Entertainer = {
  name: 'Entertainer',
  bonus: {
    skill: ['Acrobatics', 'Performance'],
  }
};

var GuildArtisan = {
  name: 'Guild Artisan',
  bonus: {
    skill: ['Insight, Persuasion'],
  }
};

var Hermit = {
  name: 'Hermit',
  bonus: {
    skill: ['Medicine, Religion']
  }
};

var Noble = {
  name: 'Noble',
  bonus: {
    skill: ['History', 'Persuasion']
  }
};

var Outlander = {
  name: 'Outlander',
  bonus: {
    skill: ['Athletics', 'Survival']
  }
};

var Sage = {
  name: 'Sage',
  bonus: {
    skill: ['Arcana, History']
  }
};

var Sailor =  {
  name: 'Sailor',
  bonus: {
    skill: ['Athletics', 'Perception']
  }
};

var Soldier = {
  name: 'Soldier',
  bonus: {
    skill: ['Athletics, Intimidation']
  }
};

var Urchin = {
  name: 'Urchin',
  bonus: {
    skill: ['Sleight of Hand', 'Stealth']
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
