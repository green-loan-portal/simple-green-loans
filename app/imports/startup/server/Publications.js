import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
<<<<<<< HEAD
<<<<<<< HEAD
import '../../api/stuff/Section2DB';
import '../../api/stuff/Section6DB';
=======
>>>>>>> parent of ad84aeb... Finished Section 6 & 8. Need to update/fix section 7 & 9
import '../../api/stuff/Section7DB';
import '../../api/stuff/Section8DB';
import '../../api/stuff/Section9DB';
=======
>>>>>>> parent of e8ac617... Finished section 8's database; fix minor things with 7 & 9

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Stuff', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.find();
  }
  return this.ready();
});
