import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Section8DB = new Mongo.Collection('Section8DB');

/** Define a schema to specify the structure of each document in the collection; without owner */
const Section8DBSchemaWithoutOwner = new SimpleSchema({
  taxCreditClaimer: String,
  taxCreditClaimerRelationship: { type: String, required: false },
}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const Section8DBSchema = new SimpleSchema({
  owner: String,
  taxCreditClaimer: String,
  taxCreditClaimerRelationship: { type: String, required: false },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Section8DB.attachSchema(Section8DBSchema);

/** Make the collection and schema available to other code. */
export { Section8DB, Section8DBSchemaWithoutOwner };
