window.addEventListener('load',function(){

    let imgPeli = document.querySelector('.imgPeli')
    let tituloPeli = document.querySelector('.tituloPeli')
    let calificacion = document.querySelector('.calificacion')
    let info = document.querySelectorAll('.info')
    let info2 = document.querySelectorAll('.info2')
    let detalles = document.querySelector('.detalles')
    let overview = document.querySelector('.overview')
    let director = document.querySelector('.director')
    let genero = document.querySelector('.generos')
    let actores = document.querySelector('.actores')
    let trailer = document.querySelector('.trailer')



    let detallePelicula = location.search
    let detallePeliculaObjeto = new URLSearchParams(detallePelicula)
    let id = detallePeliculaObjeto.get('id')
    let titulo = detallePeliculaObjeto.get('titulo')
    let imagen = detallePeliculaObjeto.get('imagen')
    let fecha = detallePeliculaObjeto.get('fecha')
    let descrip = detallePeliculaObjeto.get('overview')
    let rating = detallePeliculaObjeto.get('calificacion')
    let generoId = detallePeliculaObjeto.get ('genero')

    console.log(generoId);


    //Detalles

    imgPeli.innerHTML = `<img src='https://image.tmdb.org/t/p/w500${imagen}' alt ='${titulo}'/>`
    tituloPeli.innerHTML = `${titulo}`
    detalles.innerHTML =  `${fecha} `
    overview.innerHTML = `${descrip}`
    calificacion.innerHTML = `${rating}`
    
    //Director y Cast

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=070e5651f364e262a772d24963f099f2&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(credits){
        console.log(credits);
        credits.crew.forEach(director1 => {

            if(director1.job == 'Director'){
                director.innerHTML += `${director1.name} - `
                console.log(director1.name);
            }
        });
        credits.cast.forEach(cast => {
            actores.innerHTML += `${cast.name} - `

        })
        
        
    })
    .catch(function(error){
        console.log(error);
    })


    //Generos

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=070e5651f364e262a772d24963f099f2&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(genre){
        console.log(genre);
        detalles.innerHTML +=  `| ${genre.runtime}m`
        genre.genres.forEach(genero1 =>{
            genero.innerHTML += `${genero1.name} / `

        })
        
    })

    .catch(function(error){
        console.log(error);
    })


    //Trailer

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=070e5651f364e262a772d24963f099f2&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(video){
        console.log(video);
        trailer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.results[0].key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    })

    .catch(function(error){
        console.log(error);
    })


})