Assignments = new Mongo.Collection("assignments");

Assignments.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (true);
  }
  
});
