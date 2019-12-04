import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const VerifyEmail = new Mongo.Collection('VerifyEmailDB');

/** Define a schema to specify the structure of each document in the collection. */
const VerifyEmailSchema = new SimpleSchema({
    email: String,
    verifiedCode: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
VerifyEmail.attachSchema(VerifyEmailSchema);

/** Make the collection and schema available to other code. */
export { VerifyEmail, VerifyEmailSchema };
