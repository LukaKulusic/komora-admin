import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';
var apiUrl = 'https://laravel.stomkomcg.me';
// var apiUrl = "http://127.0.0.1:8000/"

var config = {
    headers: {'Authorization': "bearer " + localStorage.getItem('token')}
};

export function getParticipans_api(){
    return axios.get(apiUrl + '/congress')
}

export function addParticipans_api(member) {
    return axios.post(apiUrl + '/congress', member, config)
}

export function editParticipans_api(member) {
    return axios.put(apiUrl + '/congress/'+member.id, member, config)
}

export function deleteParticipans_api(id) {
    return axios.delete(apiUrl + '/congress/'+id, config)
}

export function payment_api(details) {
    return axios.put(apiUrl + '/payment/'+details.id + "/" +details.payment, config)
}



