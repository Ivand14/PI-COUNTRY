const { Country } = require('../db.js');
const axios = require('axios');

//* Obtengo la informacion de la Api y la paso a mi BD

const ApiData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/countries'); 
        const countries = await response.data.map(country => {
            return{
                id: country.cca3,
                name: country.name.common,
                image: country.flags.png,
                continent: country.continents? country.continents[0]: 'undefined',
                capital: country.capital? country.capital.join(', '): 'undefined',
                subregion: country.subregion? country.subregion: 'undefined',
                area: country.area? country.area: 'undefined',
                population: country.population? country.population: 'undefined',
            }
        }); 
        const dataBase = await Country.findAll()
        if(dataBase.length === 0){
            await Country.bulkCreate(countries) //* BulkCreate permite crear varios registros a la vez en una sola consulta
        }
        console.log('Base de datos cargada con exito 🍀')
    } catch (error) {
        console.log('Error al obtener los datos de la Api', error);
    }
};



//* Traigo la info de la Api y la cargo en mi Base de Datos
// const ApiToDB = async () => {
//     try {
//         const DataBase = await Country.findAll(); 
//         if(DataBase.length < 1) {
//             const allCountries = await ApiData();
//             await Country.bulkCreate(allCountries)
//             console.log('Base de datos cargada con exito')
//         }
//     } catch (error) {
//         console.log('Error al cargar los datos de la Api en la Data Base',error);
//     }
// };


module.exports = ApiData; 