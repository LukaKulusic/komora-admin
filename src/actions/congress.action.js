import { congressConstants } from "../constants/congress.constants";

export function getCongressParticipas_request(content) {
    return {
        type: congressConstants.GETCONGRESSPARTICIPANS_REQUEST,
        payload: content
    }
}
export function getCongressParticipas_success(content) {
    return {
        type: congressConstants.GETCONGRESSPARTICIPANS_SUCCESS,
        payload: content
    }
}
export function getCongressParticipas_failure(error) {
    return {
        type: congressConstants.GETCONGRESSPARTICIPANS_FAILURE,
        payload: error
    }
}


//
//
//
export function payment_request(content) {
    return {
        type: congressConstants.PAYMENT_REQUEST,
        payload: content
    }
}
export function payment_success(content) {
    return {
        type: congressConstants.PAYMENT_SUCCESS,
        payload: content
    }
}
export function payment_failure(error) {
    return {
        type: congressConstants.PAYMENT_FAILURE,
        payload: error
    }
}
//
//
//
export function deleteParticipans_request(content) {
    return {
        type: congressConstants.DELETE_PARTICIPANS_REQUEST,
        payload: content
    }
}
export function deleteParticipans_success(content) {
    return {
        type: congressConstants.DELETE_PARTICIPANS_SUCCESS,
        payload: content
    }
}
export function deleteParticipans_failure(error) {
    return {
        type: congressConstants.DELETE_PARTICIPANS_FAILURE,
        payload: error
    }
}
