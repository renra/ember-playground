import DS from 'ember-data';

export default DS.Model.extend({
  init: function(){
    this.set('name', 'Unknown child of unknown parents');
  },

  greet: function(){
    alert(this.get('name') + ' is greeting you');
  }
});
