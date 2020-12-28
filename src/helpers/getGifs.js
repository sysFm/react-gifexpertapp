export const getGifs = async (category) => {
  //Se tranforma a una funcion async por que espera un respuesta
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=LWLXTwES3cX0sgLZYexBCah4i1kd9S5g&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  //La funcion gifs retorna un objeto con la informacio que nos irteresa
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
