import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import blockReducer from "./reducers/BlockReducer";
import flatReducer from "./reducers/FlatReducer";
import announcementReducer from "./reducers/AnnouncementReducer";
import userReducer from "./reducers/UserReducer";
import roleReducer from "./reducers/RoleReducer";
import complainReducer from "./reducers/ComplainReducer";
import activityReducer from "./reducers/ActivityReducer";
import subscriptionReducer from "./reducers/SubscriptionReducer";
import orderReducer from "./reducers/OrderReducer";
import apartmentReducer from "./reducers/ApartmentReducer";
import cityReducer from "./reducers/CityReducer";


const rootReducer = combineReducers({
   auth : authReducer,
   block : blockReducer,
   flat : flatReducer,
   announcement : announcementReducer,
   user : userReducer,
   role:  roleReducer,
   complain : complainReducer,
   activity : activityReducer,
   subscription : subscriptionReducer,
   order : orderReducer,
   apartment : apartmentReducer,
   city : cityReducer,
 
})
const initialState = {}

const middleware = [thunk];



const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;