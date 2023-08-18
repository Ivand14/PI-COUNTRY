const { Country } = require('../db.js');
const {Activity} = require('../db.js');


const getInfo = async () => {
    try {
        return await Country.findAll({
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: {
                    attributes: [], //* para evitar recuperar atributos adicionales de esa tabla intermedia.
                },
            }
        }) 
    } catch (error) {
        console.log('Error al obtener todos los Paises de la DB y sus Actividades', error);
    }
};

module.exports = getInfo;