import '/imports/startup/server/Accounts';
import '/imports/startup/server/Publications';
import '/imports/startup/server/Mongo';
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { Roles } from 'meteor/alanning:roles';

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

  sendUnfinishedApplications: function (recipientEmail) {
    process.env.MAIL_URL = `smtps://${Meteor.settings.automatedEmailInfo[0].email}%40gmail.com:${Meteor.settings.automatedEmailInfo[0].password}@smtp.gmail.com:465`;

    let myHTMLString = `<center><img src="https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png" width="50%" /></center><br>`;
    myHTMLString += `Aloha,<br><br>`;
    myHTMLString += `Thank you for your interest toward <a href="https://gems.hawaii.gov">Hawaii GEM$ Loans</a>. In order for us to review your application, you must complete every form section. Please <a href="http://simple-green-loans.meteorapp.com/#/profile">login</a> your account to complete all of your missing form(s).<br>`;
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

  sendApplicationStatus: function (recipientEmail, recipientName, approved) {
    process.env.MAIL_URL = `smtps://${Meteor.settings.automatedEmailInfo[0].email}%40gmail.com:${Meteor.settings.automatedEmailInfo[0].password}@smtp.gmail.com:465`;

    let myHTMLString = `<center><img src="https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png"
    width="50%" /></center><br>`;
    myHTMLString += `Aloha${recipientName ? ` ${recipientName}` : ''},<br><br>`;
    myHTMLString += (approved ? `Congratulations, your application has been approved by HECO!<br />We will send an
      additional email to provide you any additional steps soon.` :
      `Thank you applying at <a href='http://simple-green-loans.meteorapp.com'>GEM$ Loan Program</a>.
      We regret to inform you that your application submitted does not qualify for our loan.
      If you think this is a mistake, please call or email us at (808) 587-3868 or dbedt.gems@hawaii.gov.`)
    myHTMLString += '<br /><br/>Again, thank you for joining with us,<br>GEMS Hawaii Team';

    this.unblock();
    const label = approved ? 'approved!' : 'denied.';
    Email.send({
      to: recipientEmail,
      from: 'GEMS',
      subject: `GEMS - Your application has been ${label}`,
      html: myHTMLString,
    });
  },

  updateUserRole: function (id, role) {
    if (role === 'admin') {
      Roles.addUsersToRoles(id, 'admin');
    } else if (role === 'contractor') {
      Roles.addUsersToRoles(id, 'contractor');
    } else {
      Roles.addUsersToRoles(id, 'user');
    }
  },
});