const mongoose = require('mongoose')

module.exports = () => {

    const PostSchema = new mongoose.Schema({

        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        curso: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: true
        }],
        data_criacao: {
            type: Date,
            default: Date.now,
            required: true
        },
        data_modificacao: {
            type: Date,
            default: Date.now,
            required: true
        },
        data_evento: {
            type: Date,
            required: true
        },
        ativo: {
            type: Boolean,
            default: true,
            required: true
        }
    })

    return mongoose.model('Post', PostSchema);

}