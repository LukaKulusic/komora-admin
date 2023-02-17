import { aboutConstants } from "../constants/about.constants";

//get about content 
export function getAboutContent_request(content) {
    return {
        type: aboutConstants.GETABOUTCONTENT_REQUEST,
        payload: content
    }
}
export function getAboutContent_success(content) {
    return {
        type: aboutConstants.GETABOUTCONTENT_SUCCESS,
        payload: content
    }
}
export function getAboutContent_failure(error) {
    return {
        type: aboutConstants.GETABOUTCONTENT_REQUEST,
        payload: error
    }
}
//get about content 


//edit abount content
export function editAboutContent_request(content) {
    return {
        type: aboutConstants.EDITABOUTCONTENT_REQUEST,
        payload: content
    }
}
export function editAboutContent_success(content) {
    return {
        type: aboutConstants.EDITABOUTCONTENT_SUCCESS,
        payload: content
    }
}
export function editAboutContent_failure(error) {
    return {
        type: aboutConstants.EDITABOUTCONTENT_FAILURE,
        payload: error
    }
}
//edit abount content