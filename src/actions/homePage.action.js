import { homePageConstants } from '../constants/homePage.constants'

//Get content for homepage
export function homePage_request(content) {
    return {
        type: homePageConstants.HOMEPAGE_REQUEST,
        payload: content
    }
}

export function homePage_success(content) {
    return {
        type: homePageConstants.HOMEPAGE_SUCCESS,
        payload: content
    }
}

export function homePage_failure(error) {
    return {
        type: homePageConstants.HOMEPAGE_FAILURE,
        payload: error
    }
}

// Edit homepage
export function homePageEdit_request(content) {
    return {
        type: homePageConstants.HOMEPAGEEDIT_REQUEST,
        payload: content
    }
}

export function homePageEdit_success(content) {
    return {
        type: homePageConstants.HOMEPAGEEDIT_SUCCESS,
        payload: content
    }
}

export function homePageEdit_failure(error) {
    return {
        type: homePageConstants.HOMEPAGEEDIT_FAILURE,
        payload: error
    }
}