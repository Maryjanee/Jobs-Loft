import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import {composeWithDevTools  } from "redux-devtools-extension";


const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

