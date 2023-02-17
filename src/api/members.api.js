import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';
var apiUrl = 'https://laravel.stomkomcg.me';
// var apiUrl = "http://127.0.0.1:8000/"

var config = {
    headers: {'Authorization': "bearer " + localStorage.getItem('token')}
};

export function getMembers_api(){
    return axios.get(apiUrl + '/member')
}

export function addMember_api(member) {
    return axios.post(apiUrl + '/member', member, config)
}

export function editMember_api(member) {
    return axios.put(apiUrl + '/member/'+ member.id, member, config)
}

export function deleteMember_api(id) {
    return axios.delete(apiUrl + '/member/'+id, config)
}

export function getMemberDetails_api(member) {
    return axios.get(apiUrl + '/member/'+member)
}
export function getCities_api () {
    return axios.get(apiUrl + '/cities')
}



//BOARD MEMBERS
export function getBoardMembers_api() {
    return axios.get(apiUrl + '/boardMember')
}

export function deleteBoardMember_api(member) {
    console.log("member in api: "+ member.id);
    return axios.put(apiUrl + '/deleteBoardMember/'+ member.id, member, config)
}

export function getBoardMemberDetails_api(id) {
    return axios.get(apiUrl + '/biography/'+id);
}

export function addBoardMember_api(member) {
    console.log("member in api: "+ member.id);
    return axios.put(apiUrl + '/addBoardMember/'+ member.id, member, config)
}


//BOARD MEMBERS