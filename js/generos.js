window.addEventListener('load',function(){

    let generosPelis = document.querySelector('.generosPelis')
    let generosTv = document.querySelector('.generosTv')

    //Peliculas

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=070e5651f364e262a772d24963f099f2&language=en-US')
    .then(function(respuesta){
        return respuesta.json()
        
    })
    .then(function(generos){
        console.log(generos);
        generos.genres.forEach(element => {
            
            generosPelis.innerHTML += `<li class="nombresGenero"> <a href="resultadosGeneros.html?id=${element.id}&name=${element.name}">${element.name}</a> </li>`

        });
        

    })
    .catch(function(error){
        console.log(error);
    })
    
    //Series

    fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=070e5651f364e262a772d24963f099f2&language=en-US')
    .then(function(respuesta){
        return respuesta.json()
        
    })
    .then(function(generos){
        console.log(generos);
        generos.genres.forEach(element => {
            
            generosTv.innerHTML += `<li class="nombresGenero"> <a href="resultadosGeneros.html?id=${element.id}&name=${element.name}">${element.name}</a> </li>`

        });
        

    })
    .catch(function(error){
        console.log(error);
    })













})