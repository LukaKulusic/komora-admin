import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';

var apiUrl = 'https://laravel.stomkomcg.me';


export function getCategories_api() {
    return axios.get(apiUrl + '/category')
}