const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log(
    'please provide the password as an argument: node mongo.js <password>'
  )
  process.exit(1)
}
// Command line args
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://fullstack_demo:${password}@cluster0.z2zns.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
})

// New Person Schema
const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name, // added as command line arg
  number: number, // added as command line arg
  date: new Date(),
})

// If name or number args empty, return entire phonebook, else, create new Person
if (!name || !number) {
  // Retrieve all Person Objects (people, number) from database
  Person.find({}).then((result) => {
    console.log('phonebook:')
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else {
  // Add new Person Object (name, number, date) to database
  person.save().then((result) => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}
