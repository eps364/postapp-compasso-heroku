const mongoose = require('mongoose');

module.exports = () => {
  
    const ProfileSchema = new mongoose.Schema({

        nome: {
            type: String,
            required: true
        },

        ativo: {
            type: Boolean,
            required: true,
            default: true
        },

        data_criacao: {
            type: Date,
            required: false,
            dafault: Date.now
        },

        data_modificacao: {
            type: Date,
            required: false
        }


    })

    return mongoose.model('Profile', ProfileSchema)

}