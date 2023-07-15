// const db = require('../db')
import db from '../db.js';

;(async () => {
  try {
    await db.schema.dropTableIfExists('todos')
    await db.schema.withSchema('public').createTable('todos', (table) => {
      table.increments()
      table.string('description')
    })
    console.log('Created todos table!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
