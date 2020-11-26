window.addEventListener('load',function(){

    let imgSerie = document.querySelector('.imgSerie')
    let tituloSerie = document.querySelector('.tituloSerie')
    let calificacion = document.querySelector('.calificacion')
    let fecha = document.querySelector('.fecha')
    let overview = document.querySelector('.overview')
    let director = document.querySelector('.director')
    let generos = document.querySelector('.generos')
    let actores = document.querySelector('.actores')
    let trailer = document.querySelector('.trailer')
    let title = document.querySelector('title')
    let review = document.querySelector('.reviews')

    let detalleSerie = location.search
    let detalleSerieObjeto = new URLSearchParams(detalleSerie)

    
    let id = detalleSerieObjeto.get('id')
    let titulo = detalleSerieObjeto.get('titulo')
    let imagen = detalleSerieObjeto.get('imagen')
    let descrip = detalleSerieObjeto.get('overview')
    let rating = detalleSerieObjeto.get('calificacion')
    let generosId = detalleSerieObjeto.get('genero')
    let fechaAire = detalleSerieObjeto.get('fecha')

    //Detalles

    title.innerHTML = `Ver ${titulo}`
    imgSerie.innerHTML += `<img src='https://image.tmdb.org/t/p/w500${imagen}' alt ='${titulo}'/>`
    tituloSerie.innerHTML = `${titulo}`
    calificacion.innerHTML = `${rating}`
    fecha.innerHTML = `${fechaAire}`
    overview.innerHTML = `${descrip}`
    
    //Creador + detalles

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=070e5651f364e262a772d24963f099f2&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(credits){
        console.log(credits);
        director.innerHTML = `${credits.created_by[0].name}`
        credits.genres.forEach(genre => {
            generos.innerHTML += ` <a href="resultadosGeneros.html?id=${genre.id}&name=${genre.name}">${genre.name}
            </a> / `
        });
        fecha.innerHTML += `| ${credits.episode_run_time[0]}m `
        

    })
    .catch(function(error){
        console.log(error);
    })

    //Cast

    fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=070e5651f364e262a772d24963f099f2&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(cast1){
        console.log(cast1);
        cast1.cast.forEach(crew =>{
            actores.innerHTML += `${crew.name} - `
        })
        
    })
    .catch(function(error){
        console.log(error);
    })

    //Favoritos
    let recuperoStorageTv = localStorage.getItem("favoritosTv")

    if (recuperoStorageTv == null ){
        favoritosTv=[];
    }
    else {
        favoritosTv=JSON.parse(recuperoStorageTv);
    }

    let boton = document.querySelector(".botonFavoritos")

    if(favoritosTv.includes(id)){
        boton.innerHTML="Quitar de Favoritos"
    }

    boton.onclick = function(){

        if(favoritosTv.includes(id)==true){
            let index = favoritosTv.indexOf(id)
            favoritosTv.splice(index, 1)
            boton.innerHTML="Agregar a favoritos"
        }
        else{
            favoritosTv.push(id)
            boton.innerHTML ="Quitar de favoritos"
        }

        let infoParaStorageTv = JSON.stringify(favoritosTv)
        localStorage.setItem("favoritosTv", infoParaStorageTv)
        console.log(localStorage); 
    }

   






    
    //Trailer

    fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=070e5651f364e262a772d24963f099f2&language=en-US`)
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


    //Reviews

    fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=070e5651f364e262a772d24963f099f2&language=en-US&language=en-US&page=1`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(reviews){
        console.log(reviews);
        reviews.results.forEach(reseña=>{
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