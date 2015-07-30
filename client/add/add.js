
Template.addContent.helpers({
  colls: Colls.find()
})
Template.addContent.events({
  'click #sub': function(e){
    Meteor.call("collInsert",$('#inp').val());
  }
})
