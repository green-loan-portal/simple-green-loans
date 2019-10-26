import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Email } from 'meteor/email';

/* eslint-disable no-console */

function createUser(email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ email, password, role }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}

console.log("Passed1");
if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("Passed2");
    // process.env.MAIL_URL = "smtp://postmaster%40sandbox5ecff102054b492ab4b6959e3394e2ab.mailgun.org:7f50dcf8a84ee0a19a43f40d50a082a7-2dfb0afe-5b4fe61e@smtp.mailgun.org:587"
    // process.env.MAIL_URL = `smtps://17buih%40gmail.com:${Meteor.settings.wileysGmailPassword}@smtp.gmail.com:465`;
    process.env.MAIL_URL = `smtps://${Meteor.settings.automatedEmailInfo.email}%40gmail.com:${Meteor.settings.automatedEmailInfo.passwords}@smtp.gmail.com:465`;

    let myHTMLString = "<center><img src='https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png' width='50%' /></center><br>";
    myHTMLString += "Dear Wiley,<br><br>";
    myHTMLString += "Thank you for signing up at <a href=\"https://gems.hawaii.gov\">GEMS.hawaii.gov</a>. In order for you to register, please <a href=\"https://www.test.com\">click here</a> to verify your account.<br>";
    myHTMLString += "We are looking forward hearing you soon.<br><br>";
    myHTMLString += "Cheers,<br>GEMS Hawaii Team";

    console.log("Passed3");
    try {
      Email.send({
        to: "wileyb@hawaii.edu",
        from: "Hawaii GEMS",
        subject: "GEMS - Email Confirmation",
        html: myHTMLString
      });
      console.log("Sent");
    } catch (e) {
      console.log("Email error: " + e);
    }
  });
}

