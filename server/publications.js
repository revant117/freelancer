Meteor.publish('profile', function(){
  if(this.userId){
    return Meteor.users.find({_id: this.userId});
  }
});
Meteor.publish('colls', function () {
  return Colls.find().fetch();
})
