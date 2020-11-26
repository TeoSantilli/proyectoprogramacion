window.addEventListener('load',function(){

    let tituloGenero = document.querySelector('.tituloGenero')
    let peliculas = document.querySelector('.peliculas')

    let detalleGenero = location.search
    let detalleGeneroObjeto = new URLSearchParams(detalleGenero)
    let id = detalleGeneroObjeto.get('id')
    let name = detalleGeneroObjeto.get('name')

    tituloGenero.innerHTML += name

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=070e5651f364e262a772d24963f099f2&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(genero){
        console.log(genero);
        genero.results.forEach(element => {
            peliculas.innerHTML += `<a href="movieDetail.html?id=${element.id}&titulo=${element.title}&imagen=${element.poster_path}&overview=${element.overview}&calificacion=${element.vote_average}&genero=${element.genre_ids}&fecha=${element.release_date}"> <img src='https://image.tmdb.org/t/p/w500${element.poster_path}' alt ='${element.title}'/>
            </a>`
        });
        
    })
    .catch(function(error){
        console.log(error);
    })
 
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=070e5651f364e262a772d24963f099f2&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(genero){
        console.log(genero);
        genero.results.forEach(element => {
            peliculas.innerHTML += `<a href="seriesDetail.html?id=${element.id}&titulo=${element.name}&imagen=${element.poster_path}&overview=${element.overview}&calificacion=${element.vote_average}&genero=${element.genre_ids}&fecha=${element.first_air_date}"> <img src='https://image.tmdb.org/t/p/w500${element.poster_path}' alt ='${element.name}'/>
            </a>`
        });
        
    })
    .catch(function(error){
        console.log(error);
    })









})