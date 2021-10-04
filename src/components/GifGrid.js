import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid( {category}) {

    
    // const apiKey = 'H0cR2OocKyysc18mNiYB330ycLD3Zs4v';

    //const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImages)
    // },[category])

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className= "animate__animated animate__fadeIn">{ category }</h3>

            {loading && <p className= "animate__animated animate__flash">Loading</p>}

            <div className = "card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key = { img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}
