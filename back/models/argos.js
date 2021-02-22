const mongoose = require('mongoose')

const ArgosSchema = mongoose.Schema({
    nom:{
      type: String,
      require: true
    }
})

const argos = mongoose.model('argos', ArgosSchema)


module.exports = argos