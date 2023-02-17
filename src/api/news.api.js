import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';
var apiUrl = 'https://laravel.stomkomcg.me';
// var apiUrl = "http://127.0.0.1:8000"

var config = {
    headers: {'Authorization': "bearer " + localStorage.getItem('token')}
};

export function getNews_api(){
    return axios.get(apiUrl + '/news')
}

export function getNoveltyDetails_api(id) {
    return axios.get(apiUrl + '/news/'+id)
}

export function getNewsForCategory_api(id) {
    return axios.get(apiUrl + '/newsForCategory/'+id)
}

export function addNews_api(novelty) {

    const data = new FormData()

    console.log('novelty.imgTitle = ', novelty.imgTitle)

    data.append('category_id', novelty.category_id)
    data.append('category_name', novelty.category_name)
    data.append('content', novelty.content)
    data.append('full_text', novelty.full_text)
    data.append('posted_by', 'admin')
    data.append('title', novelty.title)
    data.append('images', novelty.images)
    data.append('imgTitle', novelty.imgTitle)

    return axios.post(apiUrl + '/news', data, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            // 'Authorization': "bearer " + localStorage.getItem('token')
        }
    })
}

export function editNews_api(novelty) {
    return axios.put(apiUrl + '/news/'+ novelty.id, novelty, config)
}

export function deleteNews_api(id) {
    return axios.delete(apiUrl + '/news/'+id, config)
}


