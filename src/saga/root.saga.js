import { all } from 'redux-saga/effects'
import { memberSaga } from './member.saga'
import { newsSaga} from './news.saga'
import { categorySaga } from './category.saga';

export default function* rootSaga() {
    yield all ([
        memberSaga(),
        newsSaga(),
        categorySaga()
    ])
}