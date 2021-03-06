import { request } from "./requestServices.js";

const databaseUrl = `https://movies-3f0d2-default-rtdb.firebaseio.com`;

const api = {
    movies: `${databaseUrl}/movies.json`,

}

export const getAllMovies = async (searchText) => {
    let res = await request(api.movies, 'GET');

    console.log(api.movies)

    return Object.keys(res).map(key => ({ key, ...res[key] })).filter(x => !searchText || searchText == x.title);
}

export const getOneMovie = async (id) => {
    let res = await request(`${databaseUrl}/movies/${id}.json`, 'GET');

    return Object(res, {id});
    // let { email } = authService.getData();

    // let likes = Object.values(res.likes || {});
    // let alreadyLiked = likes.some(x => x.creator == email);

    // return Object.assign(res, {isOwn: res.creator == email, alreadyLiked, likes: likes.length});
};

export const likeMovie = async (id, creator) => {
    let res = await request(`${databaseUrl}/movies/${id}/likes.json`, 'POST', {creator});

    return res;
}