import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import blockReducer from "./reducers/BlockReducer";
import flatReducer from "./reducers/FlatReducer";


const rootReducer = combineReducers({
   auth : authReducer,
   block : blockReducer,
   flat : flatReducer
 
})
const initialState = {}

const middleware = [thunk];



const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;