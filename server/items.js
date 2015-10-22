var descriptions = Content.find().fetch()[0];

var Glaive = {
  weight: 18,
  worth: 200000,
  damage: '1d10',
  damageType: 'slashing',
  attributes: ['Reach', 'Two-Handed'],
  description: descriptions['en-us'].items.Glaive
};

var Longsword = {
  weight: 3,
  worth: 150000,
  damage: '1d8 (1d10)',
  damageType: 'slashing',
  attributes: ['Versatile'],
  description: descriptions['en-us'].items.Longsword
};

Items.insert(Glaive);
Items.insert(Longsword);
