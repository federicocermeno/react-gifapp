export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=15&q=${encodeURI(category)}&api_key=5VOBAUgU0knWwER41wQb5qEpH6jlfbku`
    const resp =await fetch(url)
    const {data} = await resp.json()

    
    const gifs = data.map(img => {
      
      return {
        id: img.id,
        title: img.username === '' ? 'Usuario desconocido' : 'By ' + img.username,
        url: img.images?.downsized_medium.url,
        avatar: img.user?.avatar_url
      }
    })
    console.log(gifs)
    return gifs
  }

