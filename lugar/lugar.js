const axios = require("axios");

const getLugar = async(direccion) => {
    //transformo el parametro recibido en un string valido para hacer el get en la url
    const encodUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodUrl}`,
        headers: {
            "x-rapidapi-key": "448431c546mshcd8b9ebfeb15940p13988cjsnc12bda9321bd",
        },
    });

    const resp = await instance.get();

    //no lo hago por que no funciona la api para obtener la lat y lng de una ciudad
    // if (!resp.data.Results) {
    //     throw new Error(
    //         "Error en la direccion, no se pudo obtener la misma. Intente mas tarde"
    //     );
    // }
    // const data = resp.data.Results;

    const dir = "La Rioja, Argentina";
    const lat = "-29.41105";
    const lng = "-66.85067";

    return {
        dir,
        lat,
        lng,
    };
};

module.exports = {
    getLugar,
};