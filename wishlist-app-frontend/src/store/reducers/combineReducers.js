import { combineReducers } from "redux"
import authenticationReducer from "./authentication-reducer"
import mainDashboardReducer from "./main-dashboard-reducer"
import wishlistDashboardReducer from "./wishlist-dashboard-reducer"

export default combineReducers({
  auth: authenticationReducer,
  mainDashboard: mainDashboardReducer,
  wishlistDashboard: wishlistDashboardReducer,
})
