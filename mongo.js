const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Anna salasana.')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://kattimatikainen:${password}@puhelinluettelo-jfapf.mongodb.net/people?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true })

const name = process.argv[3]
const number = process.argv[4]

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const listPeople = () => {
    console.log('Puhelinluettelo:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}

if (process.argv.length < 4) {
    listPeople()
} else {

    const person = new Person({
        name: name,
        number: number
    })

    person.save().then(result => {
        console.log(`Lisättiin puhelinluetteloon ${person.name} ja numero ${person.number}.`)
        mongoose.connection.close()
    })
}