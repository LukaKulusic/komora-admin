import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';

var apiUrl = 'https://laravel.stomkomcg.me';

var config = {
    headers: {'Authorization': "bearer " + localStorage.getItem('token')}
};

export function homePage_api() {
    return axios.get(apiUrl + '/homePage')
}

export function homePageEdit_api(content) {
    return axios.put(apiUrl + '/homePage/'+content.id, content, config)
}

