import Ember from 'ember';

export default Ember.Route.extend({
  model() {
        let category = this.modelFor('lists.list.category');
        let todos = category.get('todos').toArray().filter(function(todo) {
            return todo.get('complete');
        });
        return todos;
    },
    renderTemplate(controller, model) {
        this.render('lists.list.category.todos.complete', {
            model: model
        });
    }
});
