let movies = require("./data/movies.json");
import { fetchWithTimeout } from "./services";


export function fetchMovies() {
    const resolveFunction  = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction)
}

const moviePromise = fetchMovies();

moviePromise.then(resolve = (results) => {
    console.log(results)
})