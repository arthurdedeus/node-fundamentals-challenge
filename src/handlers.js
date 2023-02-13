import { Database } from './database.js'
import { TaskPayloadSerializer } from './utils/task-payload-serializer.js'
import { randomUUID } from 'node:crypto'

const database = new Database()

export async function CreateTaskHandler(req, res) {
  try {
    const { title, description } = TaskPayloadSerializer(req.body)
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
  } catch (error) {
    return res.writeHead(error.code).end(JSON.stringify({ error: error.message }))
  }
}

export async function RetrieveTaskHandler(req, res) {
  const tasks = database.select('tasks')
  res.writeHead(200).end(JSON.stringify(tasks))
}

export async function UpdateTaskHandler(req, res) {
  try {
    const payload = TaskPayloadSerializer(req.body, true)
    const { id } = req.params
    const task = database.update('tasks', id, { ...payload })
    res.writeHead(200).end(JSON.stringify(task))
  } catch (error) {
    return res.writeHead(error.code).end(JSON.stringify({ error: error.message }))
  }
}

export async function DeleteTaskHandler(req, res) {
  try {
    const { id } = req.params
    const task = database.delete('tasks', id)
    res.writeHead(204).end(JSON.stringify(task))
  } catch (error) {
    return res.writeHead(error.code).end(JSON.stringify({ error: error.message }))
  }
}
