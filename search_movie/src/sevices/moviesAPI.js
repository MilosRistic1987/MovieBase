import axios from 'axios';

const baseUrl = "http://www.omdbapi.com/?";
const apiKey = "1b637262";

export const getMoviesBySearch = (title) => axios.get(`${baseUrl}apikey=${apiKey}&s=${title}`)
export const getMoviesByImdbId=(id)=>axios.get(`${baseUrl}apikey=${apiKey}&i=${id}`)