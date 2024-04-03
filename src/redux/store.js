// // src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import musicSaga from './sagas/musicSaga'; 
// // import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [sagaMiddleware],
// });

// sagaMiddleware.run();


const store= configureStore({
  
  reducer:rootReducer,
  middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(musicSaga)

export default store