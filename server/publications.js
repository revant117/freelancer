Meteor.publish('profile', function(){
  if(this.userId){
    return Meteor.users.find({_id: this.userId});
  }
});


Meteor.publish('assignments', function () {
  return Assignments.find();
})
<<<<<<< HEAD

Meteor.publish("files", function(){ return Files.find(); });
=======
Meteor.publish('chat', function () {
  return Chats.find();
})
>>>>>>> c93498b9a9e9f6f240eb75576e8dd4c68dc88e0c
