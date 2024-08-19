export const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b79a834c64msh1945a13fc5fe286p1c0728jsn184a541f426a',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'b79a834c64msh1945a13fc5fe286p1c0728jsn184a541f426a',
    },
  };

export const fetchData = async (url, options) => {
    const result = await fetch(url, options);
    const data = await result.json();

    return data;
}