import { memberConstants } from '../constants/member.constants'


export function getMembers_request(members) {
    return {
        type: memberConstants.GETMEMBERS_REQUEST,
        payload: members
    }
}

export function getMembers_success(members) {
    return {
        type: memberConstants.GETMEMBERS_SUCCESS,
        payload: members
    }
}

export function getMembers_failure(error) {
    return {
        type: memberConstants.GETMEMBERS_FAILURE,
        payload: error
    }
}

export function addMember_request(member) {
    return {
        type: memberConstants.ADDMEMBER_REQUEST,
        payload: member
    }
}

export function addMembar_succeess(member) {
    return {
        type: memberConstants.ADDMEMBER_SUCCESS,
        payload: member
    }
}

export function addMembar_failure(error) {
    return {
        type: memberConstants.ADDMEMBER_FAILURE,
        payload: error
    }
}

export function editMember_request(member) {
    return {
        type: memberConstants.EDITMEMBER_REQUEST,
        payload: member
    }
}

export function editMember_success(member) {
    return {
        type: memberConstants.EDITMEMBER_SUCCESS,
        payload: member
    }
}

export function editMember_failure(error) {
    return {
        type: memberConstants.EDITMEMBER_FAILURE,
        payload: error
    }
}

export function deleteMember_request(member) {
    return {
        type: memberConstants.DELETEMEMBER_REQUEST,
        payload: member
    }
}

export function deleteMember_success(member) {
    return {
        type: memberConstants.DELETEMEMBER_SUCCESS,
        payload: member
    }
}

export function deleteMember_failure(error) {
    return {
        type: memberConstants.DELETEMEMBER_FAILURE,
        payload: error
    }
}

export function getMemberDetails_request(member) {
    return {
        type: memberConstants.GETMEMBERDETAILS_REQUEST,
        payload: member
    }
}

export function getMemberDetails_success(member) {
    return {
        type: memberConstants.GETMEMBERDETAILS_SUCCESS,
        payload: member
    }
}

export function getMemberDetails_failure(error) {
    return {
        type: memberConstants.GETMEMBERDETAILS_FAILURE,
        payload: error
    }
}

//actions for cites
export function getCities_request(cities){
    return {
        type: memberConstants.getCities_success,
        payload: cities
    }
}
export function getCities_success(cities){
    return {
        type: memberConstants.GETCITIES_SUCCESS,
        payload: cities
    }
}
export function getCities_failure(error){
    return {
        type: memberConstants.GETCITIES_FAILURE,
        payload: error
    }
}
//end



// // GET BOARD MEMBERS ACTIONS
// export function getBoardMembers_request(members) {
//     return {
//         type: memberConstants.GETBOARDMEMBERS_REQUEST,
//         payload: members
//     }
// }

// export function getBoardMembers_success(members) {
//     return {
//         type: memberConstants.GETBOARDMEMBERS_SUCCESS,
//         payload: members
//     }
// }

// export function getBoardMembers_failure(error) {
//     return {
//         type: memberConstants.GETBOARDMEMBERS_FAILURE,
//         payload: error
//     }
// }
// // END GET BOARD MEMBERS ACTIONS

// // ADD BOARD MEMBERS ACTIONS
// export function addBoardMember_request(member) {
//     return {
//         type: memberConstants.BOARDMEMBERADD_REQUEST,
//         payload: member
//     }
// }

// export function addBoardMember_success(member) {
//     return {
//         type: memberConstants.BOARDMEMBERADD_SUCCESS,
//         payload: member
//     }
// }

// export function addBoardMember_failure(error) {
//     return {
//         type: memberConstants.BOARDMEMBERADD_FAILURE,
//         payload: error
//     }
// }

// //END ADD BOARD MEMBERS ACTIONS

// //DELETE BOARD MEMEBERS ACTIONS
// export function deleteBoardMember_request(member){
//     return {
//         type: memberConstants.BOARDMEMBERDELETE_REQUEST,
//         payload: member
//     }
// }

// export function deleteBoardMember_success(member){
//     return {
//         type: memberConstants.BOARDMEMBERDELETE_SUCCESS,
//         payload: member
//     }
// }

// export function deleteBoardMember_failure(error){
//     return {
//         type: memberConstants.BOARDMEMBERDELETE_FAILURE,
//         payload: error
//     }
// }
// //END DELETE BOARD MEMEBERS ACTIONS



// //DETAILS FOR BOARD MEMBERS
// export function getBoardMemberDetails_request(member) {
//     return {
//         type: memberConstants.GETBOARDMEMBERDETAILS_REQUEST,
//         payload: member
//     }
// }

// export function getBoardMemberDetails_success(member) {
//     console.log('action : ', member);
//     return {
//         type: memberConstants.GETBOARDMEMBERDETAILS_SUCCESS,
//         payload: member
//     }
// }

// export function getBoardMemberDetails_failure(error) {
//     return {
//         type: memberConstants.GETBOARDMEMBERDETAILS_FAILURE,
//         payload: error
//     }
// }
// //END DETAILS FOR BOARD MEMBERS
