import { takeEvery, put, call} from 'redux-saga/effects'
import { getMembersPg_api, getMembersNk_api, getMembersCt_api, getMembersSouth_api, getMembersNorth_api, editMembersPg_api, editMembersNk_api, editMembersCt_api, editMembersSouth_api, editMembersNorth_api } from '../api/parliament.api';
import { parliamentConstants } from '../constants/parliament.constants';
import { getParliamentPg_failure, getParliamentPg_success, getParliamentNk_failure, getParliamentNk_success, getParliamentCt_failure, getParliamentCt_success, getParliamentSouth_failure, getParliamentSouth_success, getParliamentNorth_failure, getParliamentNorth_success, editParliamentPg_failure, editParliamentPg_success, editParliamentNk_failure, editParliamentNk_success, editParliamentCt_failure, editParliamentCt_success, editParliamentSouth_failure, editParliamentSouth_success, editParliamentNorth_failure, editParliamentNorth_success } from '../actions/parliament.action';

//PG starts
export function* getParliamentPg() {
    const response = yield call(getMembersPg_api)
    if(!response || !response.data) {
        return yield put(getParliamentPg_failure('Internal server error for loading pg parliament memebers'))
    }
    if(response.status === 200){
        return yield put(getParliamentPg_success(response.data))
    } else {
        return yield put(getParliamentPg_failure('Error for loading pg parliament memebers'))
    }
}

export function* editParliamentPg(action) {
    const response = yield call(editMembersPg_api, action.payload)
    if(!response || !response.data) {
        return yield put(editParliamentPg_failure('Internal server error for edit pg parliament memebers'))
    }
    if(response.status === 200) {
        return yield put(editParliamentPg_success(response.data))
    } else {
        return yield put(editParliamentPg_failure('Error for edit pg parliament memebers'))
    }
}
//
//PG ends


//NK starts
export function* getParliamentNk() {
    const response = yield call(getMembersNk_api)
    if(!response || !response.data) {
        return yield put(getParliamentNk_failure('Internal server error for loading nk parliament'))
    }
    if(response.status === 200){
        return yield put(getParliamentNk_success(response.data))
    } else {
        return yield put(getParliamentNk_failure('Error for loading nk parliament'))
    }
}

export function* editParliamentNk(action){
    const response = yield call(editMembersNk_api, action.payload)
    if(!response || !response.data){
        return yield put(editParliamentNk_failure('Internal server error for edit nk parliament members'))
    } 
    if(response.status === 200){
        return yield put(editParliamentNk_success(response.data))
    } else {
        return yield put(editParliamentNk_failure('Error for edit nk parliament members'))
    }
}

//
//Nk ends


//CT starts
export function* getParliamentCt() {
    const response = yield call(getMembersCt_api)
    if(!response || !response.data) {
        return yield put(getParliamentCt_failure('Internal server error for loading ct parliament'))
    }
    if(response.status === 200){
        return yield put(getParliamentCt_success(response.data))
    } else {
        return yield put(getParliamentCt_failure('Error for loading ct parliament'))
    }
}
export function* editParliamentCt(action) {
    const response = yield call(editMembersCt_api, action.payload)
    if(!response || !response.data) {
        return yield put(editParliamentCt_failure('Internal server error for edit parliament ct members'))
    }
    if(response.status === 200){
        return yield put(editParliamentCt_success(response.data))
    } else {
        return yield put(editParliamentCt_failure('Error for edit parliament ct members'))
    }
}
//Ct ends


//South starts
export function* getParliamentSouth() {
    const response = yield call(getMembersSouth_api)
    if(!response || !response.data) {
        return yield put(getParliamentSouth_failure('Internal server error for loading south parliamnet'))
    }
    if(response.status === 200){
        return yield put(getParliamentSouth_success(response.data))
    } else {
        return yield put(getParliamentSouth_failure('Error for loading south parliamnet'))
    }
}

export function* editParliamentSouth(action){
    const response = yield call(editMembersSouth_api, action.payload)
    if(!response || !response.data) {
        return yield put(editParliamentSouth_failure('Internal server error for edit parliament south members'))
    }
    if(response.status === 200){
        return yield put(editParliamentSouth_success(response.data))
    } else {
        return yield put(editParliamentSouth_failure('Error for edit parliament south members'))
    }
}
//South ends


//North
//North
export function* getParliamentNorth() {
    const response = yield call(getMembersNorth_api)
    if(!response || !response.data) {
        return yield put(getParliamentNorth_failure('Internal server error for loading north members'))
    }
    if(response.status === 200){
        return yield put(getParliamentNorth_success(response.data))
    } else {
        return yield put(getParliamentNorth_failure('Error for loading north members'))
    }
}
export function* editParliamentNorth(action){
    const response = yield call(editMembersNorth_api, action.payload)
    if(!response || !response.data) {
        return yield put(editParliamentNorth_failure('Internal server error for edit parliament north members'))
    }
    if(response.status === 200){
        return yield put(editParliamentNorth_success(response.data))
    } else {
        return yield put(editParliamentNorth_failure('Error for edit parliament north members'))
    }
}
//North ends
//North ends




export function* parliamentSaga() {
    yield takeEvery(parliamentConstants.GETPARLIAMENTPG_REQUEST, getParliamentPg)
    yield takeEvery(parliamentConstants.GETPARLIAMENTNK_REQUEST, getParliamentNk)
    yield takeEvery(parliamentConstants.GETPARLIAMENTCT_REQUEST, getParliamentCt)
    yield takeEvery(parliamentConstants.GETPARLIAMENTSOUTH_REQUEST, getParliamentSouth)
    yield takeEvery(parliamentConstants.GETPARLIAMENTNORTH_REQUEST, getParliamentNorth)
    yield takeEvery(parliamentConstants.EDITPARLIAMENTPG_REQUEST, editParliamentPg)
    yield takeEvery(parliamentConstants.EDITPARLIAMENTNK_REQUEST, editParliamentNk)
    yield takeEvery(parliamentConstants.EDITPARLIAMENTCT_REQUEST, editParliamentCt)
    yield takeEvery(parliamentConstants.EDITPARLIAMENTSOUTH_REQUEST, editParliamentSouth)
    yield takeEvery(parliamentConstants.EDITPARLIAMENTNORTH_REQUEST, editParliamentNorth)
}