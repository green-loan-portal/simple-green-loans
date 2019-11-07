import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**Defines the collection*/
const AuthorizationDB = new Mongo.Collection('AuthorizationDB');

const AuthorizationDBSchema = new SimpleSchema({

}, {tracker: Tracker})
