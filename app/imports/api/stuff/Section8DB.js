import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data.*/
const Section8DB = new Mongo.Collection('Section8DB');

/** Define a schema to specify the structure of each document in the collection; without owner */
const Section8DBSchemaWithoutOwner = new SimpleSchema({
  landlordName: String,
  landlordEmail: String,
  landlordPhoneHome: { type: Number, optional: true },
  landlordPhoneCell: { type: Number, optional: true },
  propertyManagerName: String,
  propertyManagerEmail: String,
  propertyManagerPhoneHome: { type: Number, optional: true },
  propertyManagerPhoneCell: { type: Number, optional: true },
  propertyManagementCompanyName: String,
  propertyManagementCompanyAddress: String,
}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const Section8DBSchema = new SimpleSchema({
  owner: {type: String, unique: false},
  landlordName: String,
  landlordEmail: String,
  landlordPhoneHome: { type: Number, optional: true },
  landlordPhoneCell: { type: Number, optional: true },
  propertyManagerName: String,
  propertyManagerEmail: String,
  propertyManagerPhoneHome: { type: Number, optional: true },
  propertyManagerPhoneCell: { type: Number, optional: true },
  propertyManagementCompanyName: String,
  propertyManagementCompanyAddress: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Section8DB.attachSchema(Section8DBSchema);

/** Make the collection and schema available to other code. */
export { Section8DB, Section8DBSchemaWithoutOwner };
