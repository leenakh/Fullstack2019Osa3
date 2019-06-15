require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('Yhdistetään osoitteeseen', url)

mongoose.connect(url, { useNewUrlParser: true })
    .then(result => {
        console.log('Yhdistettiin MongoDB:hen.')
    })
    .catch((error) => {
        console.log('MongoDB:hen yhdistettäessä tapahtui virhe:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: { type: String, minLength: 5, required: true, unique: true, uniqueCaseInsensitive: true },
    number: { type: String, minLength: 7, required: true }
})

personSchema.plugin(uniqueValidator, { message: 'Nimi on jo puhelinluettelossa.' })

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v

    }
})

module.exports = mongoose.model('Person', personSchema)