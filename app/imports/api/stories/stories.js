import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Stories = new Mongo.Collection('Stories');

/** Create a schema to constrain the structure of documents associated with this collection. */
const StorySchema = new SimpleSchema({
  story: String
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Stories.attachSchema(StorySchema);

/** Make the collection and schema available to other code. */
export { Stories, StorySchema };
