import { congressConstants } from "../constants/congress.constants"

const initialState = {
    participans: [],
    error: ''
}

export default function congressReducer(state = initialState, action) {
    switch(action.type) {
        case congressConstants.GETCONGRESSPARTICIPANS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case congressConstants.GETCONGRESSPARTICIPANS_SUCCESS:
            return {
                ...state,
                loading: false,
                participans: action.payload
            }
        case congressConstants.GETCONGRESSPARTICIPANS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case congressConstants.PAYMENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case congressConstants.PAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                participans: action.payload
            }
        case congressConstants.PAYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case congressConstants.DELETE_PARTICIPANS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case congressConstants.DELETE_PARTICIPANS_SUCCESS:
            return {
                ...state,
                loading: false,
                participans: state.participans.filter(participans => participans.id !== action.payload.id)
            }
        case congressConstants.DELETE_PARTICIPANS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}