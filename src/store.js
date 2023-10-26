import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import Reducer from './src/screens/redux/Reducers';
import common from './common/reducer';
import snackbar from './common/snackbar/reducer';
import loader from './common/loader/reducer';
import login from './auth/reducer';
import home from './pages/static/CourseAdvantages/reducer';
import coursedetails from './pages/static/Coursedetails/reducer';
import testseries from './pages/static/Testseries/Reducer';
import studentspecial from './pages/static/Student/Reducer';
import examgpt from './pages/ExamysaiGpt/Reducer'
import Instruction from './pages/Instruction/reducer'




const persistConfig = {
  key: 'root',
  storage,
}

//import banner from "./src/screens/Home/Reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  snackbar,
  loader,
  login,
  common,
  home,
  coursedetails,
  testseries,
  studentspecial,
  examgpt,
  Instruction

});

const persistedReducer = persistReducer(persistConfig, reducer)
const configureStore = (initialState) => createStoreWithMiddleware(persistedReducer, initialState);
const store = configureStore();
// const persistor = persistStore(store)
// let store = createStore(persistedReducer)
let persistor = persistStore(store)
export default { store, persistor }




// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from "redux-thunk";
// import common from './common/reducer';
// import snackbar from './common/snackbar/reducer';
// import loader from './common/loader/reducer';
// import login from './auth/reducer';
// import home from './pages/static/CourseAdvantages/reducer';
// import coursedetails from './pages/static/Coursedetails/reducer';





// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// const reducer = combineReducers({
//   snackbar,
//   loader,
//   login,
//   common,
//   home,
//   coursedetails
// });


// const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

// export default configureStore;

