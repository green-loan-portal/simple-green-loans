import '/imports/startup/server/Accounts';
import '/imports/startup/server/Publications';
import '/imports/startup/server/Mongo';
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

Meteor.methods({
  sendConfirmationEmail: function (recipientEmail, verifiedCode) {
    process.env.MAIL_URL = `smtps://${Meteor.settings.automatedEmailInfo[0].email}%40gmail.com:${Meteor.settings.automatedEmailInfo[0].password}@smtp.gmail.com:465`;

    let myHTMLString = '<center><img src="https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png" width="50%" /></center><br>';
    myHTMLString += 'Aloha,<br><br>';
    myHTMLString += `Thank you for signing up at <a href="https://gems.hawaii.gov">GEMS.hawaii.gov</a>. In order for you to register, please <a href="http://localhost:3000/#/verify/${verifiedCode}"><strong>click here</strong></a> to verify your account.<br>`;
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

  sendUnfinishedApplications: function (recipientEmail, error) {
    process.env.MAIL_URL = `smtps://${Meteor.settings.automatedEmailInfo[0].email}%40gmail.com:${Meteor.settings.automatedEmailInfo[0].password}@smtp.gmail.com:465`;

    let myHTMLString = `<center><img src="https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png" width="50%" /></center><br>`;
    myHTMLString += `Aloha,<br><br>`;
    myHTMLString += `Thank you for your interest toward <a href="https://gems.hawaii.gov">Hawaii GEM$ Loans</a>. In order for us to review your application, you must complete every form section. We are currently missing the following form section(s) from our database records:<br>`;
    error.forEach(ele => myHTMLString += `&#8226; <a href="http://localhost:3000/#/${ele[2]}">${ele[0]}</a>: ${ele[1]}<br>`);
    myHTMLString += `<br />If you have any trouble or question, please send us an email at <a href="mailto:dbedt.gems@hawaii.gov">dbedt.gems@hawaii.gov</a> or call us at (808) 587-3868. We are looking forward to hearing from you.<br><br>`;
    myHTMLString += `Cheers,<br>GEMS Hawaii Team`;
    this.unblock();
    Email.send({
      to: recipientEmail,
      from: 'GEMS',
      subject: 'GEMS - Unfinished Form Section(s)',
      html: myHTMLString,
    });
  },
});