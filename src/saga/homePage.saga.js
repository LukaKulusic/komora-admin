import { call, put, takeEvery } from 'redux-saga/effects'
import { homePageConstants } from '../constants/homePage.constants'
import { homePage_api, homePageEdit_api } from '../api/homePage.api'
import { homePage_failure, homePage_success, homePageEdit_failure, homePageEdit_success } from '../actions/homePage.action'

export function* getContent() {
    const response = yield call(homePage_api)
    if(!response || !response.data) {
        return yield put(homePage_failure('Internal server error for loading homepage content'))
    }
    if(response.status === 200) {   
        return yield put(homePage_success(response.data))
    } else {
        return yield put(homePage_failure('Error for loading homepage content'))
    }
}

export function* editContent(action) {
    const response = yield call(homePageEdit_api, action.payload);
    if(!response || !response.data) {
        return yield put(homePageEdit_failure('Internal server error for edit homepage'))
    }
    if(response.status === 200) {
        return yield put(homePageEdit_success(response.data))
    } else {
        return yield put(homePageEdit_failure('Error for edit homepage'))
    }
}

export function* homePageSaga() {
    yield takeEvery(homePageConstants.HOMEPAGE_REQUEST, getContent)
    yield takeEvery(homePageConstants.HOMEPAGEEDIT_REQUEST, editContent)
}