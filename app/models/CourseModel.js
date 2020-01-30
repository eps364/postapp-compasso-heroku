const mongoose = require('mongoose');

module.exports = () => {

    const CourseSchema = new mongoose.Schema({

        nome: {
            type: String,
            required: true
        },

        ativo: {
            type: Boolean,
            default: true
        },

        data_criacao: {
            type: Date,
            default: Date.now
        }

    })

    return mongoose.model('Course', CourseSchema)

}
