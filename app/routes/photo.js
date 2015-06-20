import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return {
      photo_id: params.photo_id
    };
  }
});
