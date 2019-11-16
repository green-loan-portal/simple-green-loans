import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import '../../api/stuff/Section1DB';
import '../../api/stuff/Section2DB';
import '../../api/stuff/Section6DB';
import '../../api/stuff/Section7DB';
import '../../api/stuff/Section8DB';
import '../../api/stuff/Section9DB';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
