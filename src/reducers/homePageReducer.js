import { homePageConstants } from '../constants/homePage.constants'

const initialState = {
    content: []
}

export default function homePageReducer(state = initialState, action) {
    switch(action.type) {
        case homePageConstants.HOMEPAGE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case homePageConstants.HOMEPAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                content: action.payload
            }
        case homePageConstants.HOMEPAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case homePageConstants.HOMEPAGEEDIT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case homePageConstants.HOMEPAGEEDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                content: action.payload
            }
        case homePageConstants.HOMEPAGEEDIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}