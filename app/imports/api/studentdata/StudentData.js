/** Only includes/pulls data from part 6 of the application, will need to import other data into this one */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const StudentData = new Mongo.Collection('StudentData');

/** Define a schema to specify the structure of each document in the collection. */
const StudentDataSchema = new SimpleSchema({
  income: { label: 'Annual Household Income', type: String },
  email: { label: 'Email', type: String },
  totalOccupants: { label: 'Total number of occupants in the home', type: String, defaultValue: '' },
  numAdults: { label: 'Of this number, how many are adults?', type: String, defaultValue: '' },
  numRetired: { label: 'How many of the adults are retired?', type: String, defaultValue: '' },
  numChildrenBelow5: { label: 'Amount of children age 5 or younger', type: String, defaultValue: '' },
  numChildren6to12: { label: 'Amount of children ages 6 to 12', type: String, defaultValue: '' },
  numChildren13to17: { label: 'Amount of children ages 13 to 17', type: String, defaultValue: '' },
}, { tracker: Tracker });


/** Attach the schema to the collection. */
StudentData.attachSchema(StudentDataSchema);

/** Make these objects available to others. */
export { StudentData, StudentDataSchema };
