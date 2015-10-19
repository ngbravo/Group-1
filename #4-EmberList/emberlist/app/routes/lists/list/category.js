import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      return this.store.find('category', params.category_id);
    },
    actions: {
      createTodo(newTitle) {
        let category = this.modelFor(this.routeName);
        this.store.createRecord('todo', {
           title: newTitle,
           complete: false
         }).save().then(function(todo){
           category.get('todos').pushObject(todo);
           category.save().then(function(){
             todo.set('category', category);
             todo.save();
           });
         });
        },
        updateTodo(todo) {
            todo.save();
        },
        deleteTodo(todo) {
          let category = this.modelFor(this.routeName);
          category.get('todos').removeObject(todo);
          category.save();
          todo.destroyRecord();
        }
    }
});
