import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      return this.store.find('list', params.list_id);
    },
    actions: {
      createCategory(newTitle) {
         let list = this.modelFor(this.routeName);
         this.store.createRecord('category', {
             title: newTitle
         }).save().then(function(category){
           list.get('categories').pushObject(category);
           list.save().then(function(){
             category.set('list', list);
             category.save();
           });
         });
      },
      updateCategory(category) {
          category.save();
      },
      deleteCategory(category) {
        let list = this.modelFor(this.routeName);
        list.get('categories').removeObject(category);
        list.save();
        category.get('todos').toArray().forEach(function(todo){
          todo.destroyRecord();
        });
        category.destroyRecord();
      }
    }
});
