window.addEventListener('load',function(){

    let tituloResult = document.querySelector('.tituloResultado')
    let imgResult = document.querySelector('.imgResultado')

    buscadorQuery = location.search
    buscadorQueryObj = new URLSearchParams(buscadorQuery)
    console.log(buscadorQueryObj);

    let query = buscadorQueryObj.get('query')
    console.log(query);


    fetch(`https://api.themoviedb.org/3/search/multi?api_key=070e5651f364e262a772d24963f099f2&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(populares){
        console.log(populares);

        populares.results.forEach(buscador => {
        
            console.log(buscador);

            //let articulo = document.createElement('article')
            if(buscador.media_type == 'tv'){
                imgResult.innerHTML += `<a href="seriesDetail.html?id=${buscador.id}&titulo=${buscador.name}&imagen=${buscador.poster_path}&overview=${buscador.overview}&calificacion=${buscador.vote_average}&genero=${buscador.genre_ids}&fecha=${buscador.first_air_date}">
                <img src='https://image.tmdb.org/t/p/w500${buscador.poster_path}' alt ='${buscador.name}'/> 
                <h3 class="titulo">${buscador.name}</h3>
                </a>`

            }
            if(buscador.media_type == 'movie'){
                imgResult.innerHTML += `<a href="movieDetail.html?id=${buscador.id}&titulo=${buscador.title}&imagen=${buscador.poster_path}&overview=${buscador.overview}&calificacion=${buscador.vote_average}&genero=${buscador.genre_ids}&fecha=${buscador.release_date}"> <img src='https://image.tmdb.org/t/p/w500${buscador.poster_path}' alt ='${buscador.title}'/>
                <h3 class="titulo">${buscador.title}</h3>
                </a>`
            }

            
        })
        
    })
    .catch(function(error){
        console.log(error);
    })

    


})