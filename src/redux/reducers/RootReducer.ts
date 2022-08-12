import { combineReducers } from 'redux'
import SideBar from './SideBar'


const RootReducer = combineReducers({
    sideBar: SideBar,
})

export default RootReducer
