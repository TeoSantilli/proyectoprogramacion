window.addEventListener('load',function(){

    let imgPeli = document.querySelector('.imgPeli')
    let tituloPeli = document.querySelector('.tituloPeli')
    let calificacion = document.querySelector('.calificacion')
    let detalles = document.querySelector('.detalles')
    let overview = document.querySelector('.overview')
    let director = document.querySelector('.director')
    let genero = document.querySelector('.generos')
    let actores = document.querySelector('.actores')
    let trailer = document.querySelector('.trailer')
    let title = document.querySelector('title')
    let review = document.querySelector('.reviews')


    let detallePelicula = location.search
    let detallePeliculaObjeto = new URLSearchParams(detallePelicula)
    let id = detallePeliculaObjeto.get('id')
    let titulo = detallePeliculaObjeto.get('titulo')
    let imagen = detallePeliculaObjeto.get('imagen')
    let fecha = detallePeliculaObjeto.get('fecha')
    let descrip = detallePeliculaObjeto.get('overview')
    let rating = detallePeliculaObjeto.get('calificacion')
    let generoId = detallePeliculaObjeto.get ('genero')

    //console.log(generoId);


    //Detalles

    title.innerHTML = `Ver ${titulo}`
    imgPeli.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${imagen}' alt ='${titulo}'/>`
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
        //console.log(credits);
        credits.crew.forEach(director1 => {

            if(director1.job == 'Director'){
                director.innerHTML += `${director1.name} - `
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
        //console.log(genre);
        detalles.innerHTML +=  `| ${genre.runtime}m`
        genre.genres.forEach(genero1 =>{
            genero.innerHTML += `<a href="resultadosGeneros.html?id=${genero1.id}&name=${genero1.name}">${genero1.name}
            </a> / `

        })
        
    })

    .catch(function(error){
        console.log(error);
    })

    //Favoritos
    let recuperoStorage = localStorage.getItem("favoritos");

    if (recuperoStorage == null ){
        favoritos=[];
    }
    else {
        favoritos=JSON.parse(recuperoStorage);
    }

    let boton = document.querySelector(".botonFavoritos")

    if (favoritos.includes(id)){
        boton.innerHTML="Quitar de favoritos"
    }


    boton.onclick=function(){


        if (favoritos.includes(id)==true){
            let index=favoritos.indexOf(id)
            favoritos.splice(index, 1)
            boton.innerHTML="Agregar a favoritos"
        }
        else {
            favoritos.push(id);
            boton.innerHTML="Quitar de favoritos"
        }

        let infoParaStorage=JSON.stringify(favoritos);
        localStorage.setItem("favoritos", infoParaStorage)
        console.log(localStorage);

    }


    //Trailer

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=070e5651f364e262a772d24963f099f2&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(video){
        //console.log(video);
        trailer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.results[0].key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    })

    .catch(function(error){
        console.log(error);
    })

    //Reviews

    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=070e5651f364e262a772d24963f099f2&language=en-US&page=1`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(reviews){
        console.log(reviews);
        reviews.results.forEach(reseña=>{
            console.log(reseña.author_details.avatar_path);
            review.innerHTML += `<div class="reseñas">
            <img src='https://image.tmdb.org/t/p/original${reseña.author_details.avatar_path}' alt ='avatar no disponible'/>
            <h3>${reseña.author} <br> <span>${reseña.content}</span></h3>
            </div>
            `
        })
    })

    .catch(function(error){
        console.log(error);
    })


})