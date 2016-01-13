if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.set('chapp-username','Desired username'); //you could set the user name on user login
  Session.set('chapp-docid','uniqueIdentifier'); //The room identifier. Iron router's before action can be a great spot to set this.
  Session.set('chapp-historysince',new Date()); //Limit messages based on the date they were posted

  // On the Client
Comments.ui.config({
   template: 'bootstrap' // or ionic, semantic-ui
});

   Template.draw.helpers({
    square: function () {
      return ["#ccc", "#0f0"]
    }
  });

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
