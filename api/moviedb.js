import axios from 'axios';
import {apiKey} from '../constants';

// endPoints
const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMovieEndPoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcommingMovieEndPoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMovieEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

export const image500 = path=> path?`https://image.tmdb.org/t/p/w500${path}`:null;
export const image342 = path=> path?`https://image.tmdb.org/t/p/w342${path}`:null;
export const image185 = path=> path?`https://image.tmdb.org/t/p/w185${path}`:null;

const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params?params:{}
    }

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}


export const fetchTrendingMovies = () =>{
    return apiCall(trendingMovieEndPoint);
}


export const fetchUpcomingMovies = () =>{
    return apiCall(upcommingMovieEndPoint);
}

export const fetchTopRatedMovies = () =>{
    return apiCall(topRatedMovieEndPoint);
}