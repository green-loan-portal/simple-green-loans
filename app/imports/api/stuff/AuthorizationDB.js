import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data.*/
const AuthorizationDB = new Mongo.Collection('AuthorizationPage');

const AppFormValues = {
  utility: ['Hawaiian Electric', 'Maui Electric', 'Hawaiian Electric Light'],
};

/** Define a schema to specify the structure of each document in the collection; without owner */
const AuthorizationDBWithoutOwner = new SimpleSchema({
  customerName: String,
  todaysDate: String,
  serviceAddress: String,
  utility: { type: Array, required: true },
  'utility.$': { type: String, allowedValues: AppFormValues.utility },
  utilityAccountNumber: String,
}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const AuthorizationDBSchema = new SimpleSchema({
  customerName: String,
  todaysDate: String,
  serviceAddress: String,
  utility: { type: Array, required: true },
  'utility.$': { type: String, allowedValues: AppFormValues.utility },
  utilityAccountNumber: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
AuthorizationDB.attachSchema(AuthorizationDBSchema);

/** Make the collection and schema available to other code. */
export { AppFormValues, AuthorizationDB, AuthorizationDBWithoutOwner };