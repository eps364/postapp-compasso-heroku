const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('process.env.DATA_BASE_URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(console.log('Conectado ao banco com sucesso'))
    .catch((erro) => console.log('Houve um erro ao conectar no banco: ' + erro))
}