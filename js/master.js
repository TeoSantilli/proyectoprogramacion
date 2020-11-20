window.addEventListener('load', function(){



    //Slider

    let slider = document.querySelector('.slider')

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=070e5651f364e262a772d24963f099f2&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(sliderUp){
        
        for(let i = 9 ; i < 13; i++){
            slider.innerHTML += `<li> <img src="https://image.tmdb.org/t/p/original${sliderUp.results[i].backdrop_path}" alt=""> </li>`       

        }
    })


    //Peliculas Populares

    let peliculasPop = document.querySelector('.peliculasPop')

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=070e5651f364e262a772d24963f099f2&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(populares){
        //console.log(populares);
        populares.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="movieDetail.html?id=${pelicula.id}&titulo=${pelicula.title}&imagen=${pelicula.poster_path}&overview=${pelicula.overview}&calificacion=${pelicula.vote_average}&genero=${pelicula.genre_ids}&fecha=${pelicula.release_date}" > <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt ='${pelicula.title}'/> </a>` 

            peliculasPop.append(articulo)
        })
    })
    .catch(function(error){
        console.log(error);
    })


    //Peliculas en Estreno


    let peliculasEst = document.querySelector('.peliculasEst')


    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=070e5651f364e262a772d24963f099f2&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(estreno){
        //console.log(estreno);
        estreno.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="movieDetail.html?id=${pelicula.id}&titulo=${pelicula.title}&imagen=${pelicula.poster_path}&overview=${pelicula.overview}&calificacion=${pelicula.vote_average}&genero=${pelicula.genre_ids}&fecha=${pelicula.release_date}"> <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt ='${pelicula.title}'/> </a>` 

            peliculasEst.append(articulo)

        })
    })
    .catch(function(error){
        console.log(error);
    })


    //Series Populares

    let seriesPop = document.querySelector('.seriesPop')

    fetch('https://api.themoviedb.org/3/tv/popular?api_key=070e5651f364e262a772d24963f099f2&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(populares){
        console.log(populares);
        populares.results.forEach(series => {
            //console.log(series);
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="seriesDetail.html?id=${series.id}&titulo=${series.name}&imagen=${series.poster_path}&overview=${series.overview}&calificacion=${series.vote_average}&genero=${series.genre_ids}&fecha=${series.first_air_date}"> <img src='https://image.tmdb.org/t/p/w500${series.poster_path}' alt ='${series.name}'/> </a>` 

            seriesPop.append(articulo)

        })
    })
    .catch(function(error){
        console.log(error);
    })


})