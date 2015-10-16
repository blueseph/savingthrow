Characters = new Mongo.Collection('characters');

Characters.allow({
  insert: function (userId, character) {
    return userId && character.owner === userId;
  },
  update: function (userId, character, fields, modifier) {
    return userId && character.owner === userId;
  },
  remove: function (userId, character) {
    return userId && character.owner === userId;
  }
});
