import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Section1DB } from '../../api/stuff/Section1DB';
import { Section2DB } from '../../api/stuff/Section2DB';
import { Section6DB } from '../../api/stuff/Section6DB';
import { Section7DB } from '../../api/stuff/Section7DB';
import { Section8DB } from '../../api/stuff/Section8DB';
import { Section9DB } from '../../api/stuff/Section9DB';
import { AuthorizationDB } from '../../api/stuff/AuthorizationDB';


/** This subscription publishes only the documents associated with the logged in user */
let forms = {
  "Stuff": Stuffs,
  "Form1": Section1DB,
  "Form2": Section2DB,
  "Form6": Section6DB,
  "Form7": Section7DB,
  "Form8": Section8DB,
  "Form9": Section9DB,
  "AuthorizationDB": AuthorizationDB,
};

Object.keys(forms).forEach(key => {
  Meteor.publish(key, function publish() {
    if (this.userId) {
      const username = Meteor.users.findOne(this.userId).username;
      return forms[key].find({ owner: username });
    }
    return this.ready();
  });
});


/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.find();
  }
  return this.ready();
});