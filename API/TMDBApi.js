
const API_TOKEN = "29a512ae75a6686d5bbd791950e469c1"

export function getfilmfromAPI(text) {
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=' + API_TOKEN + '&language=fr&query' + text 
    return fetch(url)
        .then ((response)=>response.json())
        .catch((error)=> console.error(error))
}
 