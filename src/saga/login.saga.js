import { takeEvery, put, call} from 'redux-saga/effects'
import { loginConstants } from '../constants/login.constants';
import { login_api } from '../api/login.api';
import { login_failure, login_success } from '../actions/login.action';

export function* login(credentials) {
    const response = yield call(login_api, credentials)
    if(!response && (!response.data || !response.message)) {
        return yield put(login_failure('Unexpected error'))
    }
    if(response.status === 200) {
        localStorage.setItem('token', response.data.token)
        return yield put(login_success(response.data))
    } 

    else {
        return yield put(login_failure('Error for login'))
    }
}

export function* loginSaga() {
    yield takeEvery(loginConstants.LOGIN_REQUEST, login)
}