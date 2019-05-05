import { combineReducers } from 'redux'
import userReducer from './userReducer'
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import taskReducer from './taskReducer'


const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  projects: projectReducer,
  tasks: taskReducer
});

export default rootReducer
