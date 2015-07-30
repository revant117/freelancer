Router.configure({
  layoutTemplate:'layout',
  loadingTemplate:'loading'
});

Router.route('/', function(){
  this.render('Home');
  },{
    name:'home'
});

Router.route('/add', function(){
  this.render('addContent');
  },{
    name:'add'
});

Router.route('/profile', function(){
  this.render('profile');
  },{
  name:'profile'
});


Router.route('/about', function(){
  this.render('about');
  },{
  name:'about'
});


var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      FlashMessages.sendError("Login or Create account");
      this.redirect('/');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {
  except:['home', 'about']
});
