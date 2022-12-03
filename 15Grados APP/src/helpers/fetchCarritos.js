export const fetchCarritos = async() => {


    const url = `https://localhost:7163/api/Car/GetAll`
    const resp = await fetch( url );
    //data es el tipo principal del json que se llama
    const { data } = await resp.json();

    const Carritos = data;
    // console.log(Carritos);
    return Carritos;

}
export default fetchCarritos