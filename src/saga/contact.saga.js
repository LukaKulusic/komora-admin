import { takeEvery, put, call} from 'redux-saga/effects'
import { getContactDetails_failure, getContactDetails_success, changeDetails_failure, changeDetails_success } from '../actions/contact.action';
import { contactConstants } from '../constants/contact.constants';
import { getCompanyDetails_api, changeDetails_api } from '../api/contact.api';

export function* getContactDetails() {
    const response = yield call(getCompanyDetails_api)
    if(!response || !response.data) {
        return yield put(getContactDetails_failure('Internal server error for loading company details'))
    }
    if(response.status === 200){
        return yield put(getContactDetails_success(response.data))
    } else {
        return yield put(getContactDetails_failure('Error for loading company details'))
    }
}

export function* changeDetails(action) {
    const response = yield call(changeDetails_api, action.payload)
    if(!response || !response.data) {
        return yield put(changeDetails_failure('Internal server error for changing company details'))
    }
    if(response.status === 200){
        return yield put(changeDetails_success(response.data))
    } else {
        return yield put(changeDetails_failure('Error for changing company details'))
    }
}

export function* contactSaga() {
    yield takeEvery(contactConstants.GETCONTACTDETAILS_REQUEST, getContactDetails)
    yield takeEvery(contactConstants.CHANGEDETAILS_REQUEST, changeDetails)
}