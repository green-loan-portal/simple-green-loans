import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const ApplicationApprovalDB = new Mongo.Collection('ApplicationApprovalDB');

const ApplicationApprovalDBSchema = new SimpleSchema({
  owner: String,
  approved: Boolean,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
ApplicationApprovalDB.attachSchema(ApplicationApprovalDBSchema);

/** Make the collection and schema available to other code. */
export { ApplicationApprovalDB, ApplicationApprovalDBSchema };
