import { combineReducers } from "redux";
import managePlans from './managePlans';
import manageUsers from './manageUsers';
import managePlan from './managePlan';

const rootReducer = combineReducers({
  plans: managePlans,
  current: manageUsers,
  current_plan: managePlan
});
 
export default rootReducer;