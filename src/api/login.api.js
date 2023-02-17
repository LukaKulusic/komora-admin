import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';
var apiUrl = 'https://laravel.stomkomcg.me';


export function login_api(credentials) {
    return axios.post(apiUrl + '/api/auth/login', {
        email: credentials.payload.email,
        password: credentials.payload.password
    }).catch((error) => {
        if(error.response && error.response.data && error.response.data.error){
            return error.response.data.error;
        }
        return error.response.data;
    })
}