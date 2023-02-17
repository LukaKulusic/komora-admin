import { memberConstants } from '../constants/member.constants'
import { loginConstants } from '../constants/login.constants';

const initialState = {
    members: [],
    boardMembers: [],
    member: [],
    boardMember: [],
    admin: ''
}

export default function memberReducer(state = initialState, action) {
    switch(action.type) {
        case memberConstants.GETMEMBERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.GETMEMBERS_SUCCESS:
            return {
                ...state,
                loading: false,
                members: action.payload
            }
        case memberConstants.GETMEMBERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstants.ADDMEMBER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.ADDMEMBER_SUCCESS:
            return {
                ...state,
                loading: false,
                members: state.members.concat([action.payload])
            }
        case memberConstants.ADDMEMBER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstants.EDITMEMBER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.EDITMEMBER_SUCCESS:
            return {
                ...state,
                members: state.members,
                member: action.payload
            }
        case memberConstants.EDITMEMBER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstants.DELETEMEMBER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.DELETEMEMBER_SUCCESS:
            return {
                ...state,
                loading: false,
                members: state.members.filter(member => member.id !== action.payload.id)
            }
        case memberConstants.DELETEMEMBER_FAILURE:
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
        case memberConstants.GETMEMBERDETAILS_SUCCESS:
            // const index = state.members.findIndex(item => item.id === action.payload)
            // if(index > -1) {
            //     let _member = state.members.find(item => item.id === action.payload)
            //     return {
            //         ...state,
            //         members: state.members,
            //         member: _member
            //     }
            // }
            // break;
            return {
                ...state,
                members: state.members,
                member: action.payload
            }
        case memberConstants.GETMEMBERDETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case loginConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: false
            }
        case loginConstants.LOGIN_SUCCESS:
            return {
                ...state,
                admin: action.payload
            }
        case loginConstants.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        //actions for get cities
        case memberConstants.GETCITIES_FAILURE:
            return {
                ...state,
                loading: true
            }
        case memberConstants.GETCITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                cities: action.payload
            }
        case memberConstants.GETCITIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

