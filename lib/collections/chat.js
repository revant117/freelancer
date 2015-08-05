Chats = new Mongo.Collection("chat");

Chats.allow({
  insert: function (userId, doc) {
    if(userId)
      return (true);
  }  
});
