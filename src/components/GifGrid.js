import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

  const {data, loading} = useFetchGifs(category)

  return (
    <>
      <h3 className='card-grid-header'> {category} </h3>

      {loading && <p>Loading</p>}

      <div className='card-grid'>
          {
            data.map( img => (
              <GifGridItem 
                key={img.id}
                {...img }
              />
            ))
          }
      </div>
    </>
  )
}
