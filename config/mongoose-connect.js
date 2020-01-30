const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb+srv://admin:admin@cluster0-sv2jx.mongodb.net/postapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(console.log('Conectado ao banco com sucesso'))
    .catch((erro) => console.log('Houve um erro ao conectar no banco: ' + erro))
}