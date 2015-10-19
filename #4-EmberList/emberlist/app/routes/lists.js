import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      this.store.findAll('category');
      this.store.findAll('todo');
      return this.store.findAll('list');
    },
    actions: {
        createList(newTitle) {
           this.store.createRecord('list', {
               title: newTitle
           }).save();
        },
        updateList(list) {
            list.save();
        },
        deleteList(list) {
          list.get('categories').toArray().forEach(function(category){
            category.get('todos').toArray().forEach(function(todo){
              todo.destroyRecord();
            });
            category.destroyRecord();
          });
          list.destroyRecord();
        },
        cloneList(list){
          //TODO clone list
          var store = this.store;
          this.store.createRecord('list', {
              title: list.get('title') + " - copy"
          }).save().then(function(newList){
            list.get('categories').toArray().forEach(function(category){
              store.createRecord('category',{
                title:category.get('title')
              }).save().then(function(newCategory){
                category.get('todos').toArray().forEach(function(todo){
                  store.createRecord('todo',{
                    title:todo.get('title'),
                    complete: todo.get('complete')
                  }).save().then(function(newTodo){
                    newTodo.set('category',newCategory);
                    newCategory.get('todos').pushObject(newTodo);
                    newTodo.save();
                  });
                });
                newCategory.set('list',newList);
                newList.get('categories').pushObject(newCategory);
                newCategory.save();
              });
            });
            newList.save();
          });
        }
    }
});
