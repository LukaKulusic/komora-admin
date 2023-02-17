import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';

var apiUrl = 'https://laravel.stomkomcg.me';

var config = {
    headers: {'Authorization': "bearer " + localStorage.getItem('token')}
};

export function getCompanyDetails_api() {
    return axios.get(apiUrl + '/footer')
}

export function changeDetails_api(details) {
    return axios.put(apiUrl + '/footer/'+ details.id, details, config)
}