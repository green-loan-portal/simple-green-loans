import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const ApplicationStatusDB = new Mongo.Collection('ApplicationStatusDB');

const ApplicationStatusDBSchema = new SimpleSchema({
  owner: String,
  approved: Boolean,
  // heco: Boolean,
  // reviewed: Boolean,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
ApplicationStatusDB.attachSchema(ApplicationStatusDBSchema);

/** Make the collection and schema available to other code. */
export { ApplicationStatusDB, ApplicationStatusDBSchema };
