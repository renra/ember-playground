import Ember from 'ember';
import Person from 'app/models/person';

export default Ember.Controller.extend({
  persons: [
    Person.create({name: 'Cezary Tomczyk'}),
    Person.create({name: 'Martin Ocenas'})
  ]
});
