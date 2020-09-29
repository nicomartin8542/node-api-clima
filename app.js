const { argv } = require("./config/yargs");
const { getLugar } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");
const lugar = require("./lugar/lugar");

const getInfo = async(direccion) => {
    try {
        const lugar = await getLugar(direccion);
        const clima = await getClima(lugar.lat, lugar.lng);

        return `En la ciudad de ${lugar.dir} el clima es de ${clima}`;
    } catch (error) {
        return `No se pudo obtener el climar de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then((resp) => console.log(resp))
    .catch((e) => console.log(e));