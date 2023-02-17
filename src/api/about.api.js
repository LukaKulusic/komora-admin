import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';
var apiUrl = 'https://laravel.stomkomcg.me';
var config = {
    headers: {'Authorization': "bearer " + localStorage.getItem('token')}
};

export function about_api() {
    return axios.get(apiUrl + '/about')
}

export function editAbout_api(content) {
    return axios.put(apiUrl + '/about/'+content.id, content, config);    
}