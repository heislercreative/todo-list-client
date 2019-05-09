import { combineReducers } from 'redux'
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import taskReducer from './taskReducer'


const rootReducer = combineReducers({
  user: userReducer,
  projects: projectReducer,
  tasks: taskReducer
});

export default rootReducer
