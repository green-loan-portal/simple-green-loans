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
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';
import { ApplicationApprovalDB } from '../../api/stuff/ApplicationApprovalDB';
import { UnfinishedApplications } from '../../api/stuff/UnfinishedApplications';

/** This subscription publishes only the documents associated with the logged in user */
const forms = {
  Stuff: Stuffs,
  Form1: Section1DB,
  Form2: Section2DB,
  Form6: Section6DB,
  Form7: Section7DB,
  Form8: Section8DB,
  Form9: Section9DB,
  AuthorizationDB: AuthorizationDB,
  ApplicationStatusDBUser: ApplicationStatusDB,
  ApplicationApprovalDBUser: ApplicationApprovalDB,
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

Meteor.publish('ApplicationStatusDB', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return ApplicationStatusDB.find({});
  }
  return this.ready();
});

Meteor.publish('ApplicationApprovalDB', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return ApplicationApprovalDB.find({});
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return [
      Meteor.users.find(),
      Section1DB.find(),
      Section2DB.find(),
      Section6DB.find(),
      Section7DB.find(),
      Section8DB.find(),
      Section9DB.find(),
      AuthorizationDB.find(),
      UnfinishedApplications.find(),
    ];
  }
  return this.ready();
});
