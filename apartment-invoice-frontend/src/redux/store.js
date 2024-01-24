import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import complainReducer from "./reducers/ComplainReducer";
import postReducer from "./reducers/PostReducer";
import announcementReducer from "./reducers/AnnouncementReducer";
import userReducer from "./reducers/UserReducer";


const rootReducer = combineReducers({
    auth : authReducer,
    complain : complainReducer,
    post : postReducer,
    announcement : announcementReducer,
    user : userReducer
 
})
const initialState = {}

const middleware = [thunk];



const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;