export const getGifs=async(category)=>{//regresa una promesa que devuelve la coleccion de mis imagenes
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Y2EvdJI3AJG4k8imppoUnhEtY1NkXGyK`;
    const respuesta=await fetch(url);
    const {data}=await respuesta.json();//informacion en formato json que recibirá
    const gifs=data.map(img=>{//mutar el arreglo para extraer mediante un map la informacion que yo necesito de esa peticion http
        return{
            id:img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
    
}