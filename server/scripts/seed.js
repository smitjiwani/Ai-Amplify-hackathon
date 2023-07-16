// const db = require('../db')
import db from '../db.js';

;(async () => {
  try {
    await db('todos').insert({description: `Add names in 'Collaborators' section in README.md`})
    await db('todos').insert({description: 'Setup Docker'})
    console.log('Added sample descriptions!')
    process.exit(0)
  } catch (err) {
    console.log(1)
    process.exit(1)
  }
})()
