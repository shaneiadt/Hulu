const API_KEY = process.env.API_KEY;

interface IDictionary {
    [index: string]: {
        title: string;
        url: string;
    };
}

export interface Result {
    vote_average: number;
    overview: string;
    release_date: string;
    title: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    vote_count: number;
    first_air_date: string;
    original_language: string;
    original_title: string;
    original_name: string;
    poster_path: string;
    video: boolean;
    id: number;
    popularity: number;
    media_type: string;
  }
  

const requests = {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMysteryMovies: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTVMovies: {
        title: 'TV Movie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
} as IDictionary;

export default requests;