import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render(
      // override this to show the clients.index on every client page
    );
  }
});