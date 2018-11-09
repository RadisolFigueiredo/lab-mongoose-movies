const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
  {
    name: "Johnny Depp",
    occupation: "Actor",
    catchPhrase: "You can close your eyes to the things you don’t want to see, but you can’t close your heart to the things you don’t want to feel"
  },
  {
    name: "Jim Carrey",
    occupation: "Actor",
    catchPhrase: "Life opens up opportunities to you, and you either take them or you stay afraid of taking them"
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "The first step is you have to say that you can"
  }
]

Celebrity.create(celebrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrity.length} celebrity`)
  mongoose.connection.close()
});