import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { withTracker } from 'meteor/tracker';
import PropTypes from 'prop-types';
import Form1 from '../../ui/forms/Form1';
import { Section1DB } from './Section1DB';

// let form1Array = Section1DB.find().fetch({ owner: 1 });
// console.log(form1Array);
var Results = [

  ["Col1", "Col2", "Col3", "Col4"],
  ["Data", 50, 100, 500],
  ["Data", -100, 20, 100],

];

export const exportToCsv = function () {
  var CsvString = "";
  Results.forEach(function (RowItem, RowIndex) {
    RowItem.forEach(function (ColItem, ColIndex) {
      CsvString += ColItem + ',';
    });
    CsvString += "\r\n";
  });

  CsvString = "data:application/csv," + encodeURIComponent(CsvString);
  var x = document.createElement("A");
  x.setAttribute("href", CsvString);
  x.setAttribute("download", "somedata.csv");
  document.body.appendChild(x);
  x.click();
}

/**
 Form1.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};


 export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // const documentId = Meteor.user().username;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Form1');

  const profile = Meteor.user() ? Meteor.user().username : null;
  return {
    doc: Section1DB.findOne({ owner: profile }),
    ready: subscription.ready(),
  };

})(Form1);
 */