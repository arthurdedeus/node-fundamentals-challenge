import { Database } from './database.js'
import { randomUUID } from 'node:crypto'

const database = new Database()

export async function CreateTaskHandler(req, res) {
  const { title, description } = req.body
  const taskData = {
    id: randomUUID(),
    title,
    description,
    completed_at: null,
    created_at: new Date(),
    updated_at: new Date(),
  }
  const task = database.insert('tasks', taskData)
  res.writeHead(201).end(JSON.stringify(task))
}
