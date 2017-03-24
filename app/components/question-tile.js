import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(question, params) {
      this.sendAction('edit', question, params);
    }
  }
});
