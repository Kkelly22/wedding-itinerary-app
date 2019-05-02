import { combineReducers } from "redux";
import managePlans from './managePlans';
import manageUsers from './manageUsers';
 
const rootReducer = combineReducers({
  plans: managePlans,
  current: manageUsers
});
 
export default rootReducer;