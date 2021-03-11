import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//useEffect me va a permitir ejecutar cierto codigo de manera condicional
export const GifGrid = ({category}) => {

    const {data:images,loading}=useFetchGifs(category);//realizar peticion automatica cuando el componente se cargue una vez o cuando cambie la categoria
    
    return (
        <>
        <h3 className="card animate__animated animate__bounce">{category}</h3>
        {loading && <p>loading</p> }
       
        <div className="card-grid">

                {/*para mostrar una propiedad en html hay que traer la variable del useState,
                y tenemos que hacer un map para mediante un element html traer las propiedades 
                mediante la variable usestate y el key con la variable*/
                    images.map(img=>(
                       <GifGridItem key={img.id} {...img}/>//estoy mandando cada una de las pripiedades de las imagenes como una propiedad independiente
                    ))
                }
            
        </div> 
        </>
    );
}
