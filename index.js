require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const app = express()
const PORT = process.env.PORT

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

// Format morgan token to return POST req
morgan.token('reqParams', (req) => JSON.stringify(req.body))
const morganFormat =
  ':method :url :status :res[content-length] - :response-time ms :reqParams'
app.use(morgan(morganFormat))

// Root route
app.get('/', (req, res) => {
  res.send('<h1>working!</h1>')
})

// Info route
app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${people.length} people</p>
    <p>${new Date()}</p>`)
})

// GET ALL data from API as JSON object
app.get('/api/persons', (req, res) => {
  Person.find({}).then((people) => {
    res.json(people)
  })
})

// GET ONE data by ID from API as JSON object. Return 404 if doesn't exist
app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then((person) => {
    res.json(person)
  })
})

// DELETE by ID from API.
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  data = data.filter((person) => person.id !== id)

  res.status(204).end()
})

// ADD NEW user and phone.
app.post('/api/persons', (req, res) => {
  const body = req.body
  // Check if name or number are empty. If true, send error
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: `${!body.name ? 'name' : 'number'} is missing and required.`,
    })
  }
  // Check if name already exists in phonebook. If exists >> send error
  if (data.find((n) => n.name === body.name)) {
    return res
      .status(400)
      .json({ error: `${body.name} already exists in phonebook` })
  }
  // If name doesn't exist && name / number not empty
  // create new person Object and add to copy of existing data array.
  const person = new Person({
    id: generateId(),
    name: body.name,
    number: body.number,
  })

  person.save().then((savedPerson) => {
    res.json(savedPerson)
  })
})

// Express server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
