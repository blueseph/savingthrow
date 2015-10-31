Meteor.publish('items', function() {
  return Items.find();
});

Items.remove({});

var descriptions = Content.find().fetch()[0];

var Glaive = {
  name: 'Glaive',
  weight: 18,
  worth: 2000,
  damage: '1d10',
  damageType: 'slashing',
  attributes: ['Reach', 'Two-Handed'],
  description: descriptions['en-us'].items.Glaive
};

var Longsword = {
  name: 'Longsword',
  weight: 3,
  worth: 1500,
  damage: '1d8 (1d10)',
  damageType: 'slashing',
  attributes: ['Versatile'],
  description: descriptions['en-us'].items.Longsword
};

Items.insert(Glaive);
Items.insert(Longsword);
