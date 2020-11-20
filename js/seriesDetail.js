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
    imgSerie.innerHTML = `<img src='https://image.tmdb.org/t/p/w500${imagen}' alt ='${titulo}'/>`
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
            generos.innerHTML += ` ${genre.name} /`
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








})