import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import { Footer } from './components/Footer'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])

    return ( 
        <>
            <h2 className='header-title'>Gif Finder</h2>
            <h3 className='header-find'>Escribe aqui para encontrar tus gifs favoritos</h3>
            <AddCategory setCategories={ setCategories } />
                {
                    categories.map( category=> (
                        <GifGrid 
                            key={category}
                            category={category} />
                        ))
                }
            <Footer/>
        </>
    )
}