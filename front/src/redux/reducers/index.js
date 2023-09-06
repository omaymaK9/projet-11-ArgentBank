import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';



/* combine les 2 reducer en un seul reducteur racine */

/*
  auth:  État géré par authReducer 
  user:  État géré par userReducer 
  */



const rootReducer = combineReducers({
  auth: authReducer, 
  user: userReducer, 
  
});

export default rootReducer;

