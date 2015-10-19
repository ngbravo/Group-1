import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      let category = this.modelFor('lists.list.category');
      return category.get('todos');
    },
    renderTemplate(controller, model) {
        this.render('lists.list.category.todos.index', {
            model: model
        });
    }
});
