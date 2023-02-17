import { call, put, takeEvery } from 'redux-saga/effects'
import { deleteParticipans_failure, deleteParticipans_success, getCongressParticipas_request, getCongressParticipas_success, payment_failure, payment_success } from '../actions/congress.action';
import { getParticipans_api, payment_api, deleteParticipans_api } from '../api/congress.api';
import { congressConstants } from '../constants/congress.constants';


export function* getParticipans() {
    const response = yield call(getParticipans_api)
    if(!response || !response.data) {
        return yield put(getCongressParticipas_request('Internal server error for geting about content'))
    }
    if(response.status === 200) {   
        return yield put(getCongressParticipas_success(response.data))
    } else {
        return yield put(getCongressParticipas_request('Eror for geting about content'))
    }
}


export function* payment(action) {
    const response = yield call(payment_api, action.payload)
    if(!response || !response.data) {
        return yield put(payment_failure('Internal server error for geting about content'))
    }
    if(response.status === 200) {   
        return yield put(payment_success(response.data))
    } else {
        return yield put(payment_failure('Eror for geting about content'))
    }
}

export function* deleteParticipans(action) {
    const response = yield call(deleteParticipans_api, action.payload)
    if(!response || !response.data) {
        return yield put(deleteParticipans_failure('Internal server error for geting about content'))
    }
    if(response.status === 200) {   
        return yield put(deleteParticipans_success(response.data))
    } else {
        return yield put(deleteParticipans_failure('Eror for geting about content'))
    }
}



export function* congressSaga() {
    yield takeEvery(congressConstants.GETCONGRESSPARTICIPANS_REQUEST, getParticipans)
    yield takeEvery(congressConstants.PAYMENT_REQUEST, payment)
    yield takeEvery(congressConstants.DELETE_PARTICIPANS_REQUEST, deleteParticipans)
}