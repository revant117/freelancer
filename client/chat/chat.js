Template.chat.helpers({
	insertNew: function(obj){
		Chats.insert(obj);
	},
	findIfNew: function(){
		return Chats.find({_id : this.userId})
	},
	updateChat: function(){
		//Chats.update({this.userId}, $Push
	}
});

Template.chat.events({
	'click #send': function(e){

	},
	'keypress input': function(e){
	  if(e.charCode === 13){
	    alert('entered');	
	  }
	} 

});
