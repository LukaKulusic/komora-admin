import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';
var apiUrl = 'https://laravel.stomkomcg.me';

var config = {
    headers: {'Authorization': "bearer " + localStorage.getItem('token')}
};

export function getAdvertisments_api() {
    return axios.get(apiUrl + '/advertisments')
}

export function addAdvertisment_api(adv) {
    return axios.post(apiUrl + '/advertisments', adv, config)
}

export function deleteAdv_api(adv) {
    return axios.delete(apiUrl + '/advertisments/' + adv, config)
}

export function editAdv_api(adv) {
    return axios.put(apiUrl + '/advertisments/'+adv.id, adv, config)
}

export function getAdvDetails_api(action) {
    return axios.get(apiUrl + '/advertisments/'+action)
}