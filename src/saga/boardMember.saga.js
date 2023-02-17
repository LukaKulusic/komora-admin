import { takeEvery, put, call} from 'redux-saga/effects'
import { getBoardMembers_failure, getBoardMembers_success, addBoardMember_failure, addBoardMember_success, 
    getBoardMemberDetails_failure, getBoardMemberDetails_success, deleteBoardMember_failure, deleteBoardMember_success } from '../actions/boardMember.action'
import { memberConstants } from '../constants/member.constants'
import { getBoardMembers_api, deleteBoardMember_api, getBoardMemberDetails_api, addBoardMember_api } from '../api/members.api'



export function* getBoardMembers() {
    const response = yield call(getBoardMembers_api)
    if(!response || !response.data) {
        return yield put(getBoardMembers_failure('Internal server error for loading board members'))
    }
    if(response.status === 200) {
        return yield put(getBoardMembers_success(response.data))
    } else {
        return yield put(getBoardMembers_failure('Error for loading board members'))
    }
}

export function* addBoardMember(action) {
    const response = yield call(addBoardMember_api, action.payload)
    if(!response || !response.data) {
        return yield put(addBoardMember_failure('Internal server error for adding board member'))
    }
    if(response.status === 200) {
        return yield put(addBoardMember_success(response.data))
    } else {
        return yield put(addBoardMember_failure('Error for adding board member'))
    }
}

export function* deleteBoardMember(action) {
    const response = yield call(deleteBoardMember_api, action.payload)
    if(!response || !response.data) {
        return yield put(deleteBoardMember_failure('Internal server error for delete board member'))
    }
    if(response.status === 200) {
        console.log('status 200 ', response.data);
        return yield put(deleteBoardMember_success(response.data))
    } else {
        return yield put(deleteBoardMember_failure('Error for delete board member'))
    }
}

export function* getBoardMembersDetails(action) {
    const response = yield call(getBoardMemberDetails_api, action.payload)
    if(!response || !response.data) {
        return yield put(getBoardMemberDetails_failure('Internal server error fod getting details for board member'))
    }
    if(response.status === 200){
        return yield put(getBoardMemberDetails_success(response.data))
    } else {
        return yield put(getBoardMemberDetails_failure('Error fod getting details for board member'))
    }
}

export function* boardMemberSaga() {
    yield takeEvery(memberConstants.GETBOARDMEMBERS_REQUEST, getBoardMembers)
    yield takeEvery(memberConstants.BOARDMEMBERADD_REQUEST, addBoardMember)
    yield takeEvery(memberConstants.BOARDMEMBERDELETE_REQUEST, deleteBoardMember)
    yield takeEvery(memberConstants.GETBOARDMEMBERDETAILS_REQUEST, getBoardMembersDetails)
}