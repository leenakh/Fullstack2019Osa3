console.log('Kukkuu!')

require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(morgan('tiny'))


app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>')
})

app.get('/info', (req, res, next) => {
    Person.find({}, function (err, result) {
        const count = result.length

        const info = (
            `<p>Puhelinluettelossa on ${count} henkilön yhteystiedot.</p>
         <p>${Date()}</p>`
        )

        res.send(info)

    })
        .catch(error => next(error))
})

app.get('/api/persons', (req, res, next) => {
    Person.find({}).then(persons => {
        res.json(persons.map(person => person.toJSON()))
    })
        .catch(error => next(error))
})


app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if (person) {
                res.json(person.toJSON())
            } else {
                res.status(404).json({ error: 'Hakemaasi henkilöä ei ole puhelinluettelossa.' }).end()
            }
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    const person = {
        name: body.name,
        number: body.number
    }
    Person.findByIdAndUpdate(req.params.id, person, { new: true, runValidators: true, context: 'query' })
        .then(updatedPerson => {
            if (updatedPerson) {
                res.json(updatedPerson.toJSON())

            } else {
                res.status(404).json({ error: `Henkilö ${body.name} on poistettu puhelinluettelosta.` })
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

const generatedId = () => {
    return Math.floor(Math.random() * 100000) + 1
}

app.post('/api/persons', (req, res, next) => {
    const body = req.body

    const person = new Person({
        name: body.name,
        number: body.number
    })
    person
        .save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormattedPerson => {
            res.json(savedAndFormattedPerson)
        })
        .catch(error => next(error))
})

const errorHandler = (error, req, res, next) => {
    //let key = Object.keys(error.errors)[0]
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return res.status(400).send({ error: 'Sivun osoite on väärin muotoiltu. Anna id kelvollisessa muodossa.' })
    } else if (!req.body.name) {
        return res.status(400).send({ error: 'Nimi puuttuu.' })
    } else if (!req.body.number) {
        return res.status(400).send({ error: 'Numero puuttuu.' })
    } else if (error.name === 'ValidationError' && error.errors.name.kind === 'unique') {
        return res.status(400).send({ error: error.errors.name.message })
    }
    next(error)
}

app.use(errorHandler)

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'Hakemaasi sivua ei ole olemassa. Anna kelvollinen osoite.' })
}

app.use(unknownEndpoint)


const PORT = process.env.PORT
app.listen(PORT, () => {
})