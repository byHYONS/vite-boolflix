// importo il metodo reactive:
import { reactive } from "vue";

export const store = reactive({
    userSearch: '',
    selectGenre: 'all',
    // risultato delle chiamate API:
    movieRisults: [],
    tvRisults: [],
    // API info:
    apiInfo: {
        url: 'https://api.themoviedb.org/3/',
        searchMovie: 'search/movie?',
        searchTv: 'search/tv?',
        // parametri:
        apiKey: 'e15053208c9a5cbb8be0e4a844fc6700',
        apiToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTUwNTMyMDhjOWE1Y2JiOGJlMGU0YTg0NGZjNjcwMCIsInN1YiI6IjY2NjAyZjIyNDI5NjM4OTY3YzY5MTc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KuHygX9Ee7rci6fe7CFGamLrMmAOq1Ir5nQqP3DzDX4',
        query: 'all',
        language: 'it-IT',
        page: 1,
    }

})
