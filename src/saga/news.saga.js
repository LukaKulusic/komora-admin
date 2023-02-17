import { takeEvery, put, call} from 'redux-saga/effects'
import { getNews_api, addNews_api, editNews_api, deleteNews_api, getNoveltyDetails_api, getNewsForCategory_api } from '../api/news.api'
import { getNews_failure, getNews_success, addNews_failure, addNews_success, editNews_failure, editNews_success, deleteNews_failure, 
    deleteNews_success, getNoveltyDetails_success, getNewsForCategory_success, getNoveltyDetails_failure, getNewsForCategory_failure } from '../actions/news.actions'
import { newsConstants } from '../constants/news.constants';

export function* getNews() {
    const response = yield call(getNews_api)
    if(!response || !response.data) {
        return yield put(getNews_failure('Internal server error for get news'))
    }
    if(response.status === 200) {
        return yield put(getNews_success(response.data))
    } else {
        return yield put(getNews_failure('Error for get news'))
    }
}

export function* getNoveltyDetails(action) {
    const response = yield call(getNoveltyDetails_api, action.payload)
    if(!response || !response.data) {
        return yield put(getNoveltyDetails_failure('Internal server error for get novelty details'))
    }
    if(response.status === 200) {
        return yield put(getNoveltyDetails_success(response.data))
    } else {
        return yield put(getNoveltyDetails_failure('Internal server error for get novelty details'))
    }
}

export function* getNewsForCateogry(action) {
    const response = yield call(getNewsForCategory_api, action.payload)
    if(!response || !response.data) {
        return yield put(getNewsForCategory_failure('Internal server error for get novelty details'))
    }
    if(response.status === 200) {
        return yield put(getNewsForCategory_success(response.data))
    } else {
        return yield put(getNewsForCategory_failure('Internal server error for get novelty details'))
    }
}

export function* addNews(action) {
    const response = yield call(addNews_api, action.payload)
    if(!response || !response.data) {
        return yield put(addNews_failure('Internal server error for add news'))
    } 
    if(response.status === 200) {
        return yield put(addNews_success(response.data))
    } else {
        return yield put(addNews_failure('Error for add news'))
    }
}

export function* editNews(action) {
    const response = yield call(editNews_api, action.payload)
    if(!response || !response.data) {
        return yield put(editNews_failure('Internal server error for edit news'))
    }
    if(response.status === 200) {
        return yield put(editNews_success(response.data))
    } else {
        return yield put(editNews_failure('Error for edit news'))
    }
}

export function* deleteNews(action) {
    const response = yield call(deleteNews_api, action.payload.id)
    if(!response || !response.data) {
        return yield put(deleteNews_failure('Internal server error for delete news'))
    }
    if(response.status === 200) {
        return yield put(deleteNews_success(response.data))
    } else {
        return yield put(deleteNews_failure('Error for delete news'))
    }
}

export function* newsSaga() {
    yield takeEvery(newsConstants.GETNEWS_REQUEST, getNews)
    yield takeEvery(newsConstants.ADDNEWS_REQUEST, addNews)
    yield takeEvery(newsConstants.EDITNEWS_REQUEST, editNews)
    yield takeEvery(newsConstants.DELETENEWS_REQUEST, deleteNews)
    yield takeEvery(newsConstants.GETNOVELTYDETAILS_REQUEST, getNoveltyDetails)
    yield takeEvery(newsConstants.GETNEWSFORCATEGORY_REQUEST, getNewsForCateogry)
}