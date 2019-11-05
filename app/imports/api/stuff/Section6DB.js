import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data.*/
const Section6DB = new Mongo.Collection('Section6DB');

/** Define a schema to specify the structure of each document in the collection; without owner */
const Section6DBSchemaWithoutOwner = new SimpleSchema({
    income: { label: 'Annual Household Income', type: String },
    totalOccupants: { label: 'Total number of occupants in the home', type: Number },
    numAdults: { label: 'Of this number, how many are adults?', type: Number },
    numRetired: { label: 'How many of the adults are retired?', type: Number },
    numChildrenBelow5: { label: 'Amount of children age 5 or younger', type: Number },
    numChildren6to12: { label: 'Amount of children ages 6 to 12', type: Number },
    numChildren13to17: { label: 'Amount of children ages 13 to 17', type: Number },
    membersNotHomeDay: { label: 'Number of HH members at work/school during the day', type: Number },
    membersNotHomeNight: { label: 'Number of HH members at work/school during the night', type: Number },
    membersHomeDay: { label: 'Number of HH members home during the day', type: Number },
    membersHomeWork: { label: 'Number of HH members working from home', type: Number },
    employerName: { label: 'Employer name', type: String, optional: false },
    occupation: { label: 'Occupation/Position', type: String, optional: false },
    workPhone: { label: 'Work Phone Number', type: Number },
}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const Section6DBSchema = new SimpleSchema({
    owner: String,
    income: String,
    totalOccupants: Number,
    numAdults: Number,
    numRetired: Number,
    numChildrenBelow5: Number,
    numChildren6to12: Number,
    numChildren13to17: Number,
    membersNotHomeDay: Number,
    membersNotHomeNight: Number,
    membersHomeDay: Number,
    membersHomeWork: Number,
    employerName: String,
    occupation: String,
    workPhone: Number,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Section6DB.attachSchema(Section6DBSchema);

/** Make the collection and schema available to other code. */
export { Section6DB, Section6DBSchemaWithoutOwner };
