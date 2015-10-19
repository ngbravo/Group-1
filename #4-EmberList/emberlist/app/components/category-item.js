import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'li',
  classNameBindings: ['editing'],
    editing: false,
    actions: {
        editCategory() {
            this.toggleProperty('editing');
        },
        submitCategory() {
          let category = this.get('category');
          if (category.get('title') === "") {
              this.sendAction('deleteCategory', category);
          } else {
              this.sendAction('updateCategory', this.get('category'));
          }
          this.set('editing', false);
        },
        deleteCategory(){
          let category = this.get('category');
          this.sendAction('deleteCategory', category);
        }
    }
});
