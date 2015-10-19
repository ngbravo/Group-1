import Ember from 'ember';

export default Ember.Route.extend({
  model() {
        let category = this.modelFor('lists.list.category');
        return category.get('todos').toArray().filter(function(todo) {
            return !todo.get('complete');
        });
    },
    renderTemplate(controller, model) {
        this.render('lists.list.category.todos.incomplete', {
            model: model
        });
    }
});
