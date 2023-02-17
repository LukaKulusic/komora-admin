import { takeEvery, put, call} from 'redux-saga/effects'
import { getMembers_failure, getMembers_success, addMembar_failure, addMembar_succeess, editMember_failure, editMember_success, deleteMember_failure, deleteMember_success, getMemberDetails_failure, getMemberDetails_success, getCities_failure, getCities_success } from '../actions/member.actions'
import  { memberConstants } from '../constants/member.constants'
import { getMembers_api, addMember_api, deleteMember_api, editMember_api, getMemberDetails_api, getCities_api } from '../api/members.api'

export function* getMembers() {
    const response = yield call(getMembers_api)
    if(!response || !response.data) {
        return yield put(getMembers_failure('Internal server error for loading members'))
    }
    if(response.status === 200) {
        return yield put(getMembers_success(response.data))
    } else {
        return yield put(getMembers_failure('Error for getMembers'))
    }
}

export function* addMember(action) {
    const response = yield call(addMember_api, action.payload)
    if(!response || !response.data) {
        return yield put(addMembar_failure('Internal server error for add member'))
    }
    if(response.status === 200) {
        return yield put(addMembar_succeess(response.data))
    } else {
        return yield put(addMembar_failure('Error for add member'))
    }
}

export function* editMember(action) {
    const response = yield call(editMember_api, action.payload)
    if(!response || !response.data){
        return yield put(editMember_failure('Internal server error for edit member'))
    }
    if(response.status === 200) {
        return yield put(editMember_success(response.data))
    } else {
        return yield put(editMember_failure('Error for edit member'))
    }
}

export function* deleteMember(action) {
    const response = yield call(deleteMember_api, action.payload.id)
    if(!response || !response.data) {
        return yield put(deleteMember_failure('Internal server error fore delete member'))
    }
    if(response.status === 200) {
        return yield put(deleteMember_success(response.data))
    } else {
        return yield put(deleteMember_failure('Error for delete member'))
    }
}

export function* getMemberDetails(action) {
    const response = yield call(getMemberDetails_api, action.payload)
    if(!response || !response.data) {
        return yield put(getMemberDetails_failure('Internal server error for loading member details'))
    }
    if(response.status === 200) {
        return yield put(getMemberDetails_success(response.data))
    } else {
        return yield put(getMemberDetails_failure('Error for loading member details'))
    }
}

export function* getCities() {
    const response = yield call(getCities_api)
    if(!response || !response.data) {
        return yield put(getCities_failure('Internal server error for loading memners from north'))
    }    
    if(response.status === 200) {
        return yield put(getCities_success(response.data))
    } else {
        return yield put(getCities_failure('Error for loading memners from north'))
    }
}

export function* memberSaga() {
    yield takeEvery(memberConstants.GETMEMBERS_REQUEST, getMembers)
    yield takeEvery(memberConstants.ADDMEMBER_REQUEST, addMember)
    yield takeEvery(memberConstants.EDITMEMBER_REQUEST, editMember)
    yield takeEvery(memberConstants.DELETEMEMBER_REQUEST, deleteMember)
    yield takeEvery(memberConstants.GETMEMBERDETAILS_REQUEST, getMemberDetails)
    yield takeEvery(memberConstants.GETCITIES_REQUEST, getCities)
}