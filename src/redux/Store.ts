import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

export const Store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
