import React, {useState} from 'react';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

 export const GifExpertApp=()=>{
     
     const [categories, setCategories] = useState(['pedro']);
    /* const handleAdd=()=>{
         setCategories([...categories,'hunter']);//mantengo las categorias anteriores y añado una nueva
     }*/

    return(
        <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
        <ul>
            {
                categories.map(category => (//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. 
                   <GifGrid
                     key={category} 
                     category={category}
                      />
                ))
            }
        </ul>
        </>
    )
}
