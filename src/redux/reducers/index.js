import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import dataReducer from "./dataReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  users: usersReducer,
  data: dataReducer,
  cart: cartReducer,
});
