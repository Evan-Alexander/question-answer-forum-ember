import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      var params {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        notes: this.get('notes'),
        image: this.get('image'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    }
  }
});
