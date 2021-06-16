import navigationActions from '../actions/navigationActions'

const initialState = {
    open: true
}

export default function navigationReducer(state=initialState, action) {
    switch (action.type) {
        default:
        case navigationActions.DRAWER_OPENED:
            return { open: true }
        case navigationActions.DRAWER_CLOSED:
            return { open: false }
    }
}