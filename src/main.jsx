import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {combineReducers, createStore,applyMiddleware} from 'redux'
import { accountReducers } from './reducers/account.jsx';
import { bonusReducers } from './reducers/bonus.jsx';
import { thunk } from 'redux-thunk'
import {logger}from'redux-logger'
import {Provider} from 'react-redux'
const store = createStore(combineReducers({
  account:accountReducers,
  bonus:bonusReducers
}),applyMiddleware(logger,thunk))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
   
  </StrictMode>, 
)
