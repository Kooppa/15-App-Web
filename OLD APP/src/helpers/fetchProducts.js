export const fetchProducts = async() => {


    const url = `https://api.thingspeak.com/channels/1913556/feeds.json?api_key=BMB9JVC75PKLVKDK`
    const resp = await fetch( url );
    //data es el tipo principal del json que se llama
    const { feeds } = await resp.json();

    const produ = feeds;
    console.log(produ);
    return produ;

    // fetch('https://api.thingspeak.com/channels/1913556/feeds.json?api_key=BMB9JVC75PKLVKDK')
    //     .then (res => res.json())
    //     .then(data => console.log(data))
    // return data;
}