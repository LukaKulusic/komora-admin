import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';

var apiUrl = 'https://laravel.stomkomcg.me';

var config = {
    headers: {'Authorization': "bearer " + localStorage.getItem('token')}
};

//PG starts
export function getMembersPg_api () {
    return axios.get(apiUrl + '/parliamentPg')
}
export function editMembersPg_api(member) {
    return axios.put(apiUrl + '/parliamentPg/'+ member.id, member, config)
}
//PG ends


//Nk starts
export function getMembersNk_api () {
    return axios.get(apiUrl + '/parliamentNk')
}
export function editMembersNk_api(member) {
    return axios.put(apiUrl + '/parliamentNk/'+ member.id, member, config)

}
//Nk ends


//Ct starts
export function getMembersCt_api () {
    return axios.get(apiUrl + '/parliamentCt')
}
export function editMembersCt_api(member) {
    return axios.put(apiUrl + '/parliamentCt/'+ member.id, member, config)
}
//Ct ends


//South starts
export function getMembersSouth_api () {
    return axios.get(apiUrl + '/parliamentSouth')
}
export function editMembersSouth_api(member) {
    return axios.put(apiUrl + '/parliamentSouth/'+ member.id, member, config)
}
//South ends


//North starts
export function getMembersNorth_api () {
    return axios.get(apiUrl + '/parliamentNorth')
}
export function editMembersNorth_api(member) {
    return axios.put(apiUrl + '/parliamentNorth/'+ member.id, member, config)
}
//North ends
