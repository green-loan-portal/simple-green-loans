import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const ApplicantData = new Mongo.Collection('ApplicantData');

/** Define a schema to specify the structure of each document in the collection. */
const ApplicantDataSchema = new SimpleSchema({
  email: String,
  dob: String,
}, { tracker: Tracker });


/** Attach the schema to the collection. */
ApplicantData.attachSchema(ApplicantDataSchema);

/** Make these objects available to others. */
export { ApplicantData, ApplicantDataSchema };
