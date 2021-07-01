import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import songReducer from "./reducers/songReducer.jsx";

const store = createStore(songReducer, composeWithDevTools(applyMiddleware()));

export default store;
