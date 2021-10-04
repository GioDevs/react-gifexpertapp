

export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=H0cR2OocKyysc18mNiYB330ycLD3Zs4v`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img =>{

        return  {
            id: img.id, 
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    //console.log(gifs);
    //setImages(gifs)

    return gifs
    
}