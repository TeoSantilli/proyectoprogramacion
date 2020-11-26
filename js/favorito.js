window.addEventListener('load',function(){

    let peliculas = document.querySelector('.peliculas')
    let series = document.querySelector('.series')

    //Peliculas

    let recuperoStorage = localStorage.getItem("favoritos");

    favoritos = JSON.parse(recuperoStorage)
    console.log(favoritos);

    for (let i = 0; i < favoritos.length; i++){
        fetch(`https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=070e5651f364e262a772d24963f099f2&language=en-US`)
        .then(function(response){
            return response.json();
        })
        .then(function(favoritosPelis){
            peliculas.innerHTML += `<a href="movieDetail.html?id=${favoritosPelis.id}&titulo=${favoritosPelis.title}&imagen=${favoritosPelis.poster_path}&overview=${favoritosPelis.overview}&calificacion=${favoritosPelis.vote_average}&genero=${favoritosPelis.genre_ids}&fecha=${favoritosPelis.release_date}"> <img src='https://image.tmdb.org/t/p/w500${favoritosPelis.poster_path}' alt ='${favoritosPelis.title}'/>
            <h3 class="titulo">${favoritosPelis.title}</h3>
            </a>`
        })
    }
    
    //Series

    let recuperoStorageTv = localStorage.getItem('favoritosTv')

    favoritosTv = JSON.parse(recuperoStorageTv)
    console.log(favoritosTv);

    for (let i = 0; i < favoritosTv.length; i++){
        fetch(`https://api.themoviedb.org/3/tv/${favoritosTv[i]}?api_key=070e5651f364e262a772d24963f099f2&language=en-US`)
        .then(function(response){
            return response.json();
        })
        .then(function(favoritosSeries){
            series.innerHTML += `<a href="seriesDetail.html?id=${favoritosSeries.id}&titulo=${favoritosSeries.name}&imagen=${favoritosSeries.poster_path}&overview=${favoritosSeries.overview}&calificacion=${favoritosSeries.vote_average}&genero=${favoritosSeries.genre_ids}&fecha=${favoritosSeries.first_air_date}">
            <img src='https://image.tmdb.org/t/p/w500${favoritosSeries.poster_path}' alt ='${favoritosSeries.name}'/>
            <h3 class="titulo">${favoritosSeries.name}</h3>
            </a>`
        })
    }

})