const API_KEY="your_api_key";

const request={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchComdeyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentarie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;
