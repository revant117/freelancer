var user = Meteor.user();

Template.profile.helpers({
  username: user.username,
  website: '',
  email: user.emails[0].address,
  location: ''
})
