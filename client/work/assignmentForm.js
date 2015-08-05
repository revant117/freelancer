Template.assignmentForm.events({
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
          });
       console.log("inserted");

      }else {
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
