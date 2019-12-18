import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Section2DB = new Mongo.Collection('Section2DB');

const AppFormValues = {
    energyImprovementOptions: ['Solar Thermal Hot Water Heater', 'Solar PV Water Heater', 'Heat Pump Water Heater',
        'Solar PV System'],
    metWithApprovedContractor: ['Yes', 'No'],
    islandLocation: ['Oahu', 'Maui', 'Lanai', 'Molokai', 'Hawaii'],
    residenceType: ['Single Family Dwelling', 'Duplex', 'Townhouse', 'Apartment', 'Other'],
};


/** Define a schema to specify the structure of each document in the collection; without owner */
const Section2DBSchemaWithoutOwner = new SimpleSchema({
    firstName: String,
    middleName: { type: String, optional: true },
    lastName: String,
    utilityAccountNumber: { type: Number },
    energyImprovementOptions: { type: Array, required: true },
    'energyImprovementOptions.$': { type: String, allowedValues: AppFormValues.energyImprovementOptions },
    metWithApprovedContractor: { type: String, allowedValues: AppFormValues.metWithApprovedContractor },
    contractorName: { type: String, optional: true },
    contactName: { type: String, optional: true },
    streetAddress: String,
    islandLocation: { type: String, allowedValues: AppFormValues.islandLocation, defaultValue: 'Oahu' },
    residenceType: { type: String, allowedValues: AppFormValues.residenceType, defaultValue: 'Single Family Dwelling' },
}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const Section2DBSchema = new SimpleSchema({
    owner: String,
    firstName: String,
    middleName: { type: String, optional: true },
    lastName: String,
    utilityAccountNumber: { type: Number },
    energyImprovementOptions: { type: Array, required: true },
    'energyImprovementOptions.$': { type: String, allowedValues: AppFormValues.energyImprovementOptions },
    metWithApprovedContractor: { type: String, allowedValues: AppFormValues.metWithApprovedContractor },
    contractorName: { type: String, optional: true },
    contactName: { type: String, optional: true },
    streetAddress: String,
    islandLocation: { type: String, allowedValues: AppFormValues.islandLocation, defaultValue: 'Oahu' },
    residenceType: { type: String, allowedValues: AppFormValues.residenceType, defaultValue: 'Single Family Dwelling' },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Section2DB.attachSchema(Section2DBSchema);

/** Make the collection and schema available to other code. */
export { AppFormValues, Section2DB, Section2DBSchemaWithoutOwner };
