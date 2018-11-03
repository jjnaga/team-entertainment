import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stories } from '../../api/stories/stories.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.story} to stories collection`);
  Stories.insert(data);
}

/** Initialize the collection if empty. */
if (Stories.find().count() === 0) {
  if (Meteor.settings.defaultStories) {
    console.log('Creating default stories.');
    Meteor.settings.defaultStories.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Stories', function publish() {
  return Stories.find();
});
