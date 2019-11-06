import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Section1DB = new Mongo.Collection('Section1DB');

/** Define a schema without owner */
const Section1DBSchemaWithoutOwner = new SimpleSchema({
  email: String,
  phoneHome: { type: Number, optional: true },
  phoneMobile: { type: Number, optional: true },
  mailingAddress: { type: String, optional: true },
}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const Section1DBSchema = new SimpleSchema({
  owner: { type: String, unique: true },
  email: String,
  phoneHome: { type: Number, optional: true },
  phoneMobile: { type: Number, optional: true },
  mailingAddress: { type: String, optional: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Section1DB.attachSchema(Section1DBSchema);

/** Make the collection and schema available to other code. */
export { Section1DB, Section1DBSchemaWithoutOwner };
