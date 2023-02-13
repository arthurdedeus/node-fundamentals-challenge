import axios from 'axios'
import fs from 'node:fs'
import { parse } from 'csv-parse'
;
(async () => {
  const filename = 'tasks.csv'

  const records = fs
    .createReadStream(new URL(filename, import.meta.url))
    .pipe(parse({ from_line: 2 }))

  let count = 0
  process.stdout.write(`Start processing ${filename}\n`)

  for await (const record of records) {
    process.stdout.write(`Row: ${count++} Content: ${record.join(',')}\n`)
    await axios.post('http://localhost:3333/tasks', {
      title: record[0],
      description: record[1],
    })
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  process.stdout.write(`Done processing ${filename}\n`)
})()
