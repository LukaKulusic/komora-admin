import { loginConstants } from "../constants/login.constants"

const initialState = {
    user : [],
    error: []
}

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case loginConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case loginConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case loginConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}