import { memberConstants } from '../constants/member.constants'

const initialState = {
    boardMembers: [],
    boardMember: []
}

export default function memberReducer(state = initialState, action) {
    switch(action.type) {
         case memberConstants.GETBOARDMEMBERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.GETBOARDMEMBERS_SUCCESS:
            return {
                ...state,
                loading: false,
                boardMembers: action.payload
            }
        case memberConstants.GETBOARDMEMBERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstants.GETMEMBERDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.BOARDMEMBERADD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.BOARDMEMBERADD_SUCCESS:
            return {
                ...state,
                loading: false
                // boardMembers: state.boardMembers.concat([action.payload])
            }
        case memberConstants.BOARDMEMBERADD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstants.BOARDMEMBERDELETE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.BOARDMEMBERDELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                boardMembers: state.boardMembers.filter(member => member.id !== action.payload.id)
            }
        case memberConstants.BOARDMEMBERDELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstants.GETBOARDMEMBERDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.GETBOARDMEMBERDETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                boardMembers: state.boardMembers,
                boardMember: action.payload
            }
            // const ind = state.boardMembers.findIndex(item => item.id === action.payload)
            // if(ind > -1) {
            //     let _member = state.boardMembers.find(item => item.id === action.payload)
            //     return {
            //         ...state,
            //         boardMembers: state.boardMembers,
            //         members: state.members,
            //         boardMember: _member
            //     }
            // }
            // break;
        case memberConstants.GETBOARDMEMBERDETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

