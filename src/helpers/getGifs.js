export const getGifs = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=l8mcaq2YW5z1j5uCieFyhQbCF3ODR34F`;
    const {data} = await (await fetch(url)).json();
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}