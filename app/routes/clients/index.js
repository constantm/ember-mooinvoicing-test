import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('client');
  },
  renderTemplate: function() {
    this.render({outlet: 'sidebar'});
  }
});