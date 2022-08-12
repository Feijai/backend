import { SET_SIDEBAR } from '../constant'
import { sideBarValue } from './sideBarData'
import { sideBarProps } from '../../GlobalInterface'
import { chooseProcess } from '../../utils/dataProcess'

const initialState: { sideBar: sideBarProps[] } = { sideBar: sideBarValue }

const SideBar = function (state = initialState, action: any) {
    switch (action.type) {
        case SET_SIDEBAR: {
            const useData = chooseProcess(action.payload, state.sideBar)
            return {
                sideBar: useData
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}

export default SideBar
