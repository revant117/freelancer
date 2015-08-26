Assignments = new Mongo.Collection("assignments");

var fileStore = new FS.Store.GridFS("files");

Files = new FS.Collection("files",{
  stores : [fileStore]
});



Assignments.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (false);
  },

  update : function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (false);
  }

});


Files.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
});
