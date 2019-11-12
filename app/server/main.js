import '/imports/startup/server/Accounts';
import '/imports/startup/server/Publications';
import '/imports/startup/server/Mongo';
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

Meteor.methods({
  sendConfirmationEmail: function (recipientEmail) {
    process.env.MAIL_URL = `smtps://${Meteor.settings.automatedEmailInfo[0].email}%40gmail.com:${Meteor.settings.automatedEmailInfo[0].password}@smtp.gmail.com:465`;

    let myHTMLString = '<center><img src="https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png" width="50%" /></center><br>';
    myHTMLString += 'Aloha,<br><br>';
    myHTMLString += 'Thank you for signing up at <a href="https://gems.hawaii.gov">GEMS.hawaii.gov</a>. In order for you to register, please <a href="https://www.test.com">click here</a> to verify your account.<br>';
    myHTMLString += 'We are looking forward hearing you soon.<br><br>';
    myHTMLString += 'Cheers,<br>GEMS Hawaii Team';

    this.unblock();
    Email.send({
      to: recipientEmail,
      from: 'GEMS',
      subject: 'GEMS - Email Confirmation',
      html: myHTMLString,
    });
  },
});