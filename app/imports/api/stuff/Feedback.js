import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 *
 *
 *
 *
 *
 *
 *Do we need this?? */

/** Define a Mongo collection to hold the data. */
const Feedback = new Mongo.Collection('Feedback');

const FeedbackAppFormValues = {

};

/** Define a schema without owner */
const FeedbackSchemaWithoutOwner = new SimpleSchema({

  FinishedApplication: { type: Boolean, optional: true },
  HECO: { type: Boolean, optional: true },
  ReviewingInfo: { type: Boolean, optional: true },
  ApprovedDenied: { type: Boolean, optional: true },

}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const FeedbackSchema = new SimpleSchema({

  owner: String,
  FeedbackComplete: { type: Boolean, optional: true },
  HECO: { type: Boolean, optional: true },
  ReviewingInfo: { type: Boolean, optional: true },
  ApprovedDenied: { type: Boolean, optional: true },

}, { tracker: Tracker });

/** Attach this schema to the collection. */
Feedback.attachSchema(FeedbackSchema);

/** Make the collection and schema available to other code. */
export { FeedbackAppFormValues, Feedback, FeedbackSchemaWithoutOwner };
