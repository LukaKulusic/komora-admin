import { call, put, takeEvery } from 'redux-saga/effects'
import { aboutConstants } from '../constants/about.constants';
import { about_api, editAbout_api } from '../api/about.api';
import { getAboutContent_failure, getAboutContent_success, editAboutContent_failure, editAboutContent_success } from '../actions/aboute.action';


export function* getContent() {
    const response = yield call(about_api)
    if(!response || !response.data) {
        return yield put(getAboutContent_failure('Internal server error for geting about content'))
    }
    if(response.status === 200) {   
        return yield put(getAboutContent_success(response.data))
    } else {
        return yield put(getAboutContent_failure('Eror for geting about content'))
    }
}

export function* editContent(action) {
    const response = yield call(editAbout_api, action.payload)
    if(!response || !response.data) {
        // return yield put(getAboutContent_failure('Internal server error for geting about content'))
        return yield put(editAboutContent_failure('Internal server error for geting about content'))
    }
    if(response.status === 200) {   
        // return yield put(getAboutContent_success(response.data))
        return yield put(editAboutContent_success(response.data))
    } else {
        // return yield put(getAboutContent_failure('Eror for geting about content'))
        return yield put(editAboutContent_failure('Eror for geting about content'))
    }
}

export function* aboutSaga() {
    yield takeEvery(aboutConstants.GETABOUTCONTENT_REQUEST, getContent)
    yield takeEvery(aboutConstants.EDITABOUTCONTENT_REQUEST, editContent)
}