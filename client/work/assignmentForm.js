var fileId;
Template.assignmentForm.events({

  'change #fileInput': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        Files.insert(file, function (err, fileObj) {
        fileId = fileObj ;
        });
      });
    },

   "submit .assignmentForm": function (event) {
     // Prevent default browser form submit
     event.preventDefault();


     // Get value from form element
     var pages = event.target.pages.value;
     var date = event.target.date.value;
     var format = event.target.format.value;
     var words = event.target.words.value;
     var description = event.target.description.value;

    //  console.log(isEmpty(pages));  working ,


    if (isEmpty(pages)&&isEmpty(date)&&isEmpty(format)&&isEmpty(words)&&isEmpty(description) ){
       Meteor.call('insertAssignmentForm',pages,date,format,words,description,function(err,id){
          console.log(id);
            console.log(fileId);
          if(fileId){
             Meteor.call('insertUrl', id , fileId._id , function(err,id){console.log("entered the url");});
            // Assignments.update(id,{$set:{"fileUrl": "/cfs/files/"+id+"/" + fileId._id}});

            }




       console.log("inserted");
     });
   }
      else {
           alert("Please fill out all the entries ");
          }
     }


 });







         var isEmpty = function(value){
           isValid = true;
           if (value.length=== 0 ){
             isValid = false;
           }

          return isValid ;
        }
