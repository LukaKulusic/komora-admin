import { advertismentConstants } from "../constants/advertisment.constants";

export function getAdv_request(advs) {
    return {
        type: advertismentConstants.GETADV_REQUEST,
        payload: advs
    }
}

export function getAdv_success(advs) {
    return {
        type: advertismentConstants.GETADV_SUCCCESS,
        payload: advs
    }
}

export function getAdv_failure(error) {
    return {
        type: advertismentConstants.GETADV_FAILURE,
        payload: error
    }
}

//add advertisment
export function addAdv_request(adv) {
    return {
        type: advertismentConstants.ADDADV_REQUEST,
        payload: adv
    }
}

export function addAdv_success(adv) {
    return {
        type: advertismentConstants.ADDADV_SUCCESS,
        payload: adv
    }
}

export function addAdv_failure(error) {
    return {
        type: advertismentConstants.ADDADV_FAILURE,
        payload: error
    }
}
//end add advertisment

//edit advertisment
export function editAdv_request(adv){
    return {
        type: advertismentConstants.EDITADV_REQUEST,
        payload: adv
    }
}
export function editAdv_success(adv){
    return {
        type: advertismentConstants.EDITADV_SUCCESS,
        payload: adv
    }
}
export function editAdv_failure(error){
    return {
        type: advertismentConstants.EDITADV_FAILURE,
        payload: error
    }
}
//end edit advertisment


//delete adv starts
export function deleteAdv_request(adv){
    return {
        type: advertismentConstants.DELETEADV_REQUEST,
        payload: adv
    }
}
export function deleteAdv_success(adv){
    return {
        type: advertismentConstants.DELETEADV_SUCCESS,
        payload: adv
    }
}
export function deleteAdv_failure(error){
    return {
        type: advertismentConstants.DELETEADV_FAILURE,
        payload: error
    }
}
//end delete adv


//adv details starts
export function getAdvDetails_request(adv){
    return {
        type: advertismentConstants.GETADVDETAILS_REQUEST,
        payload: adv
    }
}
export function getAdvDetails_success(adv){
    return {
        type: advertismentConstants.GETADVDETAILS_SUCCESS,
        payload: adv
    }
}
export function getAdvDetails_failure(adv){
    return {
        type: advertismentConstants.GETADVDETAILS_FAILURE,
        payload: adv
    }
}
//adv details end