import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data.*/
const Section7DB = new Mongo.Collection('Section7DB');

/** Define a schema without owner */
const Section7DBSchemaWithoutOwner = new SimpleSchema({
  email: String,
  phoneHome: { type: Number, optional: true },
  phoneMobile: { type: Number, optional: true },
  mailingAddress: { type: String, optional: true },
  partiesNames: { type: String, optional: true },
  otherOwner1: { type: String, optional: true },
  otherOwnerRelationship1: { type: String, optional: true },
  otherOwner2: { type: String, optional: true },
  otherOwnerRelationship2: { type: String, optional: true },
}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const Section7DBSchema = new SimpleSchema({
  owner: String,
  email: String,
  phoneHome: { type: Number, optional: true },
  phoneMobile: { type: Number, optional: true },
  mailingAddress: { type: String, optional: true },
  partiesNames: { type: String, optional: true },
  otherOwner1: { type: String, optional: true },
  otherOwnerRelationship1: { type: String, optional: true },
  otherOwner2: { type: String, optional: true },
  otherOwnerRelationship2: { type: String, optional: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Section7DB.attachSchema(Section7DBSchema);

/** Make the collection and schema available to other code. */
export { Section7DB, Section7DBSchemaWithoutOwner };
