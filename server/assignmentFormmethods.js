Meteor.methods({
    insertAssignmentForm : function(pages,date,format,words,description){
        // var currentUserId = Meteor.userId();
        return Assignments.insert({
          pages: pages,
          date : date,
          format : format,
          words : words,
          description : description,
          createdAt : new Date() // current time
            // createdBy: currentUserId
        });
        console.log("inserted in server");
    }
});
