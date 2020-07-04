import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import createStore from './createStore';
import rootReducer from './modules/rootReducers';
import rootSaga from './modules/rootSagas';
import persistedReducer from './persistReducers';

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: null,
});

const middlewares = [sagaMiddleware];

const store = createStore(persistedReducer(rootReducer), middlewares);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
