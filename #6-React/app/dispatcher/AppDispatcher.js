// AppDispatcher.js
import {Dispatcher} from 'flux';
let AppDispatcher = new Dispatcher();

import DeckStore from '../stores/DeckStore';
import CardStore from '../stores/CardStore';

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {

  let action = payload.action;
  let new_item = payload.new_item;
  let id = payload.id;

  switch(action) {

    // Respond to add-item action
    case 'add-deck':
      DeckStore.addItem(new_item);
      // If action was responded to, emit change event
      DeckStore.emitChange();
      break;

    case 'add-card':
      CardStore.addItem(new_item);
      // If action was responded to, emit change event
      CardStore.emitChange();
      break;

    // Respond to remove-item action
    case 'remove-deck':
      DeckStore.removeItem(id);
      // If action was responded to, emit change event
      DeckStore.emitChange();
      break;

    default:
      return true;
  }

  return true;

});

export default AppDispatcher;
