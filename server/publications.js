Meteor.publish('profile', function(){
  if(this.userId){
    return Meteor.users.find({_id: this.userId});
  }
});


Meteor.publish('assignments', function () {
  return Assignments.find();
})


Meteor.publish("files", function(){ return Files.find(); });

Meteor.publish('chat', function () {
  return Chats.find();
})

