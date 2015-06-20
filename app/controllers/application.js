import Ember from 'ember';

export default Ember.Controller.extend({
  message: 'Is this thing working?',
  goodMood: false,
  reason: 'I had a quarrel with my girlfriend.',
  days: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  actions: {
    'day-clicked': function(day){
      alert('It is ' + day + ' today');
    }
  }
});
