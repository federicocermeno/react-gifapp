import { useState } from 'react'
import flechaderecha from '../assets/img/flechaderecha.png'
import flechaizquierda from '../assets/img/flechaizquierda.png'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats])
            setInputValue('')
        }
    }
    return (
    <form onSubmit={handleSubmit}>
        <img src={flechaizquierda} alt='Flecha izquierda' className='flechas'/>
        <input 
            type="text"
            value= {inputValue}
            onChange= {handleInputChange}
        />
        <img src={flechaderecha} alt='Flecha derecha' className='flechas'/>
    </form>
    )
}
