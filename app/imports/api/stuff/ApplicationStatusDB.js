import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const ApplicationStatus = new Mongo.Collection('ApplicationStatus');

const ApplicationStatusSchema = new SimpleSchema({
  owner: String,
  heco: Boolean,
  reviewed: Boolean,
  Approved: Boolean,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
ApplicationStatus.attachSchema(ApplicationStatusSchema);

/** Make the collection and schema available to other code. */
export { ApplicationStatus, ApplicationStatusSchema };
