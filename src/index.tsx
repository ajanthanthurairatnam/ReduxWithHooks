import * as React from "react";
import * as ReactDOM from "react-dom";
import { Incrementer } from "./components/Incrementer";
import { allReducers } from './reducers'
import { createStore  } from "redux";
import { Provider }from 'react-redux';



const store = createStore(
    allReducers
  );
ReactDOM.render(
   <Provider store = {store}>
        <Incrementer />
  </Provider>,
    document.getElementById("reactReduxId")
);