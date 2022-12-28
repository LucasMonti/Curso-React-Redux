export const getGifts = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=0kBIuehjNzlccibExAhD8DwMc1oIebgS&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs
  };
