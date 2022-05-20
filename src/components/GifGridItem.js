import React from 'react'

export const GifGridItem = ({title,url,avatar}) => {

      return (
      <div className='card animate__animated animate__zoomIn animate__faster'>
          <div className='description'>
            <p className='description-p'> {title} </p>
            <img src={avatar} alt={avatar}/>
          </div>

          <a target="_blank" rel="noreferrer" href={url}>
            <img src= {url} alt={title} />
          </a>
      </div>
      )
  }
