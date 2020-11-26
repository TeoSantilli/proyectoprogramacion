window.addEventListener('load',function(){

    let peliculas = document.querySelector('.peliculas')

    //Peliculas pagina 1

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=070e5651f364e262a772d24963f099f2&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1')
    .then(function(respuesta){
        return respuesta.json()
        
    })
    .then(function(pelis){
        console.log(pelis);
        pelis.results.forEach(movies => {
            peliculas.innerHTML += `<a href="movieDetail.html?id=${movies.id}&titulo=${movies.title}&imagen=${movies.poster_path}&overview=${movies.overview}&calificacion=${movies.vote_average}&genero=${movies.genre_ids}&fecha=${movies.release_date}" > <img src='https://image.tmdb.org/t/p/w500${movies.poster_path}' alt ='${movies.title}'/> </a>` 
        });

    })
    .catch(function(error){
        console.log(error);
    })
    
    //Peliculas pagina 2

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=070e5651f364e262a772d24963f099f2&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=2')
    .then(function(respuesta){
        return respuesta.json()
        
    })
    .then(function(pelis){
        console.log(pelis);
        pelis.results.forEach(movies => {
            peliculas.innerHTML += `<a href="movieDetail.html?id=${movies.id}&titulo=${movies.title}&imagen=${movies.poster_path}&overview=${movies.overview}&calificacion=${movies.vote_average}&genero=${movies.genre_ids}&fecha=${movies.release_date}" > <img src='https://image.tmdb.org/t/p/w500${movies.poster_path}' alt ='${movies.title}'/> </a>` 
        });

    })

    .catch(function(error){
        console.log(error);
    })

    //Peliculas pagina 3

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=070e5651f364e262a772d24963f099f2&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=3')
    .then(function(respuesta){
        return respuesta.json()
        
    })
    .then(function(pelis){
        console.log(pelis);
        pelis.results.forEach(movies => {
            peliculas.innerHTML += `<a href="movieDetail.html?id=${movies.id}&titulo=${movies.title}&imagen=${movies.poster_path}&overview=${movies.overview}&calificacion=${movies.vote_average}&genero=${movies.genre_ids}&fecha=${movies.release_date}" > <img src='https://image.tmdb.org/t/p/w500${movies.poster_path}' alt ='${movies.title}'/> </a>` 
        });

    })

    .catch(function(error){
        console.log(error);
    })













})