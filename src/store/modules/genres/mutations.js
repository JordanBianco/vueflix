export const GET_MOVIES = (state, movies) => {
    state.movies = movies;
}

export const GET_SHOWS = (state, shows) => {
    state.shows = shows;
}

export const GET_MOVIE_GENRES = (state, genres) => {
    state.movieGenres = genres;
}

export const GET_TV_GENRES = (state, genres) => {
    state.tvGenres = genres;
}