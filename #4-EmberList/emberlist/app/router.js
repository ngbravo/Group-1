import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', {path:'/'}, function() {
    this.route('list', {path: 'lists/:list_id'}, function() {
      this.route('category', {path: 'categories/:category_id'}, function() {
        this.route('todos', {path: 'todos'}, function() {
          this.route('complete', {path: 'complete'});
          this.route('incomplete', {path: 'incomplete'});
          this.route('index');
        });
      });
    });
  });
});

export default Router;
