

import React, { Fragment } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    
    const { data:images,loading } = useFetchGifs( category );  


  return (

    <Fragment>
    
    <h3 className='animate__animated animate__bounceInLeft'> { category } </h3> 

    { loading && <p className='animate__animated animate__bounceInLeft'>Loading...</p> }

    <div className='card-grid'>
               
            {               
                images.map( img  => (
                    <GifGridItem

                        key = { img.id }
                        { ...img }

                    />
                ))
            }
    </div>
    
    </Fragment>
    
  )
}
