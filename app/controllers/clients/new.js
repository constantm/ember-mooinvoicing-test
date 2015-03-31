import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {

  init: function() {
    this._super();
    console.log('init controller');
  },

  setupController: function(){
    console.log('setup controller');
      // this.setProperties({
      //   errors: null
      // });
  },

  validations: {
    clientName: {
      presence: true,
      length: { minimum: 5 }
    },
    clientEmail: {
      presence: true,
      length: { minimum: 5 }
    }
  },

  actions: {
    saveClient: function(){
      var newClient = this.store.createRecord('client', {
          clientName: this.get('clientName'),
          clientEmail: this.get('clientEmail')
      });
      newClient.save();
      this.setProperties({
          clientName: '',
          clientEmail: ''
      });
    }
  }
});