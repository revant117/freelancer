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
    },
    inserUrl : function(id,fileid){
      return Assignments.update(id , {$set:{"fileUrl": "/cfs/files/"+ id +"/" + fileid}});
      console.log("inserted url in server");

    } ,



   test : function(){
     console.log("test working");
   },

   addRoles : function(id){
      Roles.addUsersToRoles(id , 'givers');
      console.log(id);
   }


});
