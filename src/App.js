import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Board from './components/Board';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DndProvider backend={HTML5Backend}>
          <Board />
          <GlobalStyle />
        </DndProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
