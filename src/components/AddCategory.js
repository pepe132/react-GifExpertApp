import React, { useState } from 'react'
import propTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('hola munndo');
    const HandleInputChange=(e)=>{
        
        setInputValue(e.target.value);//validar cuando la persona ecribe algo 
    }
    const HandleSubmit=(e)=>{//mandar la info a traves del enter
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue,...cats]);//necesito la vvariable cats por que no tengo acceso al arreglo
            setInputValue('');
        }
        
    }
    return (
        <>
        <form onSubmit={HandleSubmit}>
            <input 
            type="text"
            value={inputValue}//pasa por valor lo que le escribimos al cuadro de texto
            onChange={HandleInputChange}
            />
        </form>
        </>
    )
}
AddCategory.propTypes={
    setCategories:propTypes.func.isRequired//manda como argumento la funcion de setCategories
}
