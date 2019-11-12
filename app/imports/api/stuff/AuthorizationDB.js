import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data.*/
const AuthorizationDB = new Mongo.Collection('AuthorizationPage');

const AppFormValues = {
  utility: ['Hawaiian Electric', 'Maui Electric', 'Hawaiian Electric Light'],
  customerTermCondition: ['I have read and understand the nature of this authorization'],
};

/** Define a schema to specify the structure of each document in the collection; without owner */
const AuthorizationDBWithoutOwner = new SimpleSchema({
  owner: String,
  timestamp: Date,
  customerName: String,
  customerNamePart2: String,
  serviceAddress: String,
  customerTermCondition: { type: Array },
  'customerTermCondition.$': {
    type: String,
    allowedValues: AppFormValues.customerTermCondition,
  },
  utility: { type: Array, required: true },
  'utility.$': { type: String, allowedValues: AppFormValues.utility },
  utilityAccountNumber: String,
}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const AuthorizationDBSchema = new SimpleSchema({
  owner: String,
  timestamp: Date,
  customerName: String,
  customerNamePart2: String,
  serviceAddress: String,
  customerTermCondition: { type: Array },
  'customerTermCondition.$': {
    type: String,
    allowedValues: AppFormValues.customerTermCondition,
  },
  utility: { type: Array, required: true },
  'utility.$': { type: String, allowedValues: AppFormValues.utility },
  utilityAccountNumber: String,
  signature: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
AuthorizationDB.attachSchema(AuthorizationDBSchema);

/** Make the collection and schema available to other code. */
export { AuthorizationDB, AuthorizationDBWithoutOwner };