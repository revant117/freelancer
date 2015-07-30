Colls = new Mongo.Collection('colls');

Meteor.methods({
  collInsert: function(val){
    Colls.insert({"val":val});
  }
});
