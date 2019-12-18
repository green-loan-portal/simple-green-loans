import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const UnfinishedApplications = new Mongo.Collection('UnfinishedApplications');

/** Define a schema to specify the structure of each document in the collection. */
const UnfinishedApplicationsSchema = new SimpleSchema({
  owner: String,
  applicants: { type: Array },
  'applicants.$': { type: String },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
UnfinishedApplications.attachSchema(UnfinishedApplicationsSchema);

/** Make the collection and schema available to other code. */
export { UnfinishedApplications, UnfinishedApplicationsSchema };
