// user Model

const mongoose = require('mongoose');

module.exports = () => {

    const UserSchema = new mongoose.Schema({
        nome: {
            required: true,
            type: String
        },
    
        cpf: {
            required: true,
            type: String
        },
    
        ra: {
            required: false,
            type: String
        },
    
        email: {
            required: true,
            type: String
        },
    
        senha: {
            required: true,
            type: String,
            select: false
        },
    
        perfil: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Profile'
            }
        ],
    
        curso: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
    
        ativo: {
            type: Boolean,
            default: false
            
        },
        data_criacao: {
            required: true,
            type: Date,
            default: Date.now
        },
        
        data_modificacao: {
            required: false,
            type: Date
        },
    
        desligado: {
            type: Boolean,
            default: false
        }
    })
    
    
    return  mongoose.model('User', UserSchema)    
}
