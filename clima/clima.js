const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=44e9d6acdbe57bc9adb012cb34d09727&lang=es&units=metric`
    );

    if (resp.status === 200) {
        throw new Error(`Error al querer obtener el clima. Intente mas tarde`);
    }
    return resp.data.main.temp;
};

module.exports = {
    getClima,
};