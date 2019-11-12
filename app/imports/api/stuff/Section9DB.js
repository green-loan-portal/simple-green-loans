import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data.*/
const Section9DB = new Mongo.Collection('Section9DB');

const Section9DBSchemaWithoutOwner = new SimpleSchema({
    timestamp: Date,
}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const Section9DBSchema = new SimpleSchema({
    owner: String,
    timestamp: Date,
    signature: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Section9DB.attachSchema(Section9DBSchema);

/** Make the collection and schema available to other code. */
export { Section9DB, Section9DBSchemaWithoutOwner };
