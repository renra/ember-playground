import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('myRoute');
  this.route('photos');
  this.route('photo', { path: '/photos/:photo_id' });
});
