Meteor.publish('profile', function(){
  return Meteor.user();
});
