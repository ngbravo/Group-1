import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'li',
  classNameBindings: ['editing'],
    editing: false,
    actions: {
        editList() {
            this.toggleProperty('editing');
        },
        submitList() {
          let list = this.get('list');
          if (list.get('title') === "") {
              this.sendAction('deleteList', list);
          } else {
              this.sendAction('updateList', this.get('list'));
          }
          this.set('editing', false);
        },
        deleteList(){
          let list = this.get('list');
          this.sendAction('deleteList', list);
        },
        cloneList(){
          let list = this.get('list');
          this.sendAction('cloneList', list);
        }
    }
});
