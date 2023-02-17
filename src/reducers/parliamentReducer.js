import { parliamentConstants } from '../constants/parliament.constants'

const initialState = {
    parliamentPg: [],
    parliamentNk: [],
    parliamentCt: [],
    parliamentSouth: [],
    parliamentNorth: []
}

export default function parliamentReducer(state = initialState, action) {
    switch(action.type) {
        //parliament PG
        case parliamentConstants.GETPARLIAMENTPG_REQUEST:
            console.log();
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTPG_SUCCESS:
            return {
                ...state,
                loading: true,
                parliamentPg: action.payload
            }
        case parliamentConstants.GETPARLIAMENTPG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case parliamentConstants.EDITPARLIAMENTPG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.EDITPARLIAMENTPG_SUCCESS:
            const editedMembersPg = state.parliamentPg.map(member => {
                if(member.id === action.payload.id) {
                    return Object.assign({}, member, {
                        id: action.payload.id,
                        user_id: action.payload.user_id,
                        name: action.payload.name
                    })
                }
                return member
            })
            return {
                parliamentPg: editedMembersPg
            }
        case parliamentConstants.EDITPARLIAMENTPG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        //parliament PG ends

        //parliamentNK
        case parliamentConstants.GETPARLIAMENTNK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTNK_SUCCESS:
            return {
                ...state,
                loading: false,
                parliamentNk: action.payload
            }
        case parliamentConstants.GETPARLIAMENTNK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case parliamentConstants.EDITPARLIAMENTNK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.EDITPARLIAMENTNK_SUCCESS:
            const editedMembersNk = state.parliamentNk.map(member => {
                if(member.id === action.payload.id) {
                    return Object.assign({}, member, {
                        id: action.payload.id,
                        user_id: action.payload.user_id,
                        name: action.payload.name
                    })
                }
                return member
            })
            return {
                parliamentNk: editedMembersNk
            }
        case parliamentConstants.EDITPARLIAMENTNK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        //parliamentNK ends

        //parliament CT
        case parliamentConstants.GETPARLIAMENTCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTCT_SUCCESS:
            return {
                ...state,
                loading: true,
                parliamentCt: action.payload
            }
        case parliamentConstants.GETPARLIAMENTCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case parliamentConstants.EDITPARLIAMENTCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.EDITPARLIAMENTCT_SUCCESS:
            const editedMembersCt = state.parliamentCt.map(member => {
                if(member.id === action.payload.id) {
                    return Object.assign({}, member, {
                        id: action.payload.id,
                        user_id: action.payload.user_id,
                        name: action.payload.name
                    })
                }
                return member
            })
            return {
                parliamentCt: editedMembersCt
            }
        case parliamentConstants.EDITPARLIAMENTCT_FAILURE:
            return {
                ...state,
                loading: true
            }

        //parliamentSouth
        case parliamentConstants.GETPARLIAMENTSOUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTSOUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                parliamentSouth: action.payload
            }
        case parliamentConstants.GETPARLIAMENTSOUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case parliamentConstants.EDITPARLIAMENTSOUTH_REQUEST:
            return {
                ...state,
                loading: true
            }    
        case parliamentConstants.EDITPARLIAMENTSOUTH_SUCCESS:
            const editedMembersSouth = state.parliamentSouth.map(member => {
                if(member.id === action.payload.id) {
                    return Object.assign({}, member, {
                        id: action.payload.id,
                        user_id: action.payload.user_id,
                        name: action.payload.name
                    })
                }
                return member
            })
            return {
                parliamentSouth: editedMembersSouth
            }
        case parliamentConstants.EDITPARLIAMENTSOUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        //parliamentNorth
        case parliamentConstants.GETPARLIAMENTNORTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTNORTH_SUCCESS:
            return {
                ...state,
                loading: false,
                parliamentNorth: action.payload
            }
        case parliamentConstants.GETPARLIAMENTNORTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        case parliamentConstants.EDITPARLIAMENTNORTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.EDITPARLIAMENTNORTH_SUCCESS:
            const editedMembersNorth = state.parliamentNorth.map(member => {
                if(member.id === action.payload.id) {
                    return Object.assign({}, member, {
                        id: action.payload.id,
                        user_id: action.payload.user_id,
                        name: action.payload.name
                    })
                }
                return member
            })
            return {
                parliamentNorth: editedMembersNorth
            }
        case parliamentConstants.EDITPARLIAMENTNORTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}