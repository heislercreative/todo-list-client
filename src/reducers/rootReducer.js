import { combineReducers } from 'redux'
import userReducer from './userReducer'
import sessionReducer from './sessionReducer'
import projectReducer from './projectReducer'
import taskReducer from './taskReducer'


const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  projects: projectReducer,
  tasks: taskReducer
});

export default rootReducer
