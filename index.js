const express = require('./config/custom-express')

express.listen(process.env.PORT, () => console.log(`Servidor rodando na porta: ${process.env.PORT}!`))