window.addEventListener('load',function(){

    let series = document.querySelector('.series')

    //series pagina 1

    fetch('https://api.themoviedb.org/3/discover/tv?api_key=070e5651f364e262a772d24963f099f2&language=en-US&sort_by=popularity.desc&page=1')
    .then(function(respuesta){
        return respuesta.json()
        
    })
    .then(function(tv){
        console.log(tv);
        tv.results.forEach(series1 => {
            series.innerHTML +=  `<a href="seriesDetail.html?id=${series1.id}&titulo=${series1.name}&imagen=${series1.poster_path}&overview=${series1.overview}&calificacion=${series1.vote_average}&genero=${series1.genre_ids}&fecha=${series1.first_air_date}"> <img src='https://image.tmdb.org/t/p/w500${series1.poster_path}' alt ='${series1.name}'/> </a>`
        });

    })

    .catch(function(error){
        console.log(error);
    })

    //series pagina 2

   
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=070e5651f364e262a772d24963f099f2&language=en-US&sort_by=popularity.desc&page=2')
    .then(function(respuesta){
        return respuesta.json()
        
    })
    .then(function(tv){
        console.log(tv);
        tv.results.forEach(series1 => {
            series.innerHTML +=  `<a href="seriesDetail.html?id=${series1.id}&titulo=${series1.name}&imagen=${series1.poster_path}&overview=${series1.overview}&calificacion=${series1.vote_average}&genero=${series1.genre_ids}&fecha=${series1.first_air_date}"> <img src='https://image.tmdb.org/t/p/w500${series1.poster_path}' alt ='${series1.name}'/> </a>`
        });

    })

    .catch(function(error){
        console.log(error);
    })

    //series pagina 3

    fetch('https://api.themoviedb.org/3/discover/tv?api_key=070e5651f364e262a772d24963f099f2&language=en-US&sort_by=popularity.desc&page=3')
    .then(function(respuesta){
        return respuesta.json()
        
    })
    .then(function(tv){
        console.log(tv);
        tv.results.forEach(series1 => {
            series.innerHTML +=  `<a href="seriesDetail.html?id=${series1.id}&titulo=${series1.name}&imagen=${series1.poster_path}&overview=${series1.overview}&calificacion=${series1.vote_average}&genero=${series1.genre_ids}&fecha=${series1.first_air_date}"> <img src='https://image.tmdb.org/t/p/w500${series1.poster_path}' alt ='${series1.name}'/> </a>`
        });

    })

    .catch(function(error){
        console.log(error);
    })













})