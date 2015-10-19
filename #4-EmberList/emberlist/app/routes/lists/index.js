import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      //TODO order by name
        return this.modelFor('lists');
    }
});
