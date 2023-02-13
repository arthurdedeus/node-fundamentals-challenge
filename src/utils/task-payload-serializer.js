export function TaskPayloadSerializer(payload, failSilently = false) {
  const fields = ['title', 'description']
  const serializedPayload = {}
  const missingFields = []

  fields.forEach((field) => {
    if (payload[field] === undefined) {
      missingFields.push(field)
    } else {
      serializedPayload[field] = payload[field]
    }
  })

  if (missingFields.length > 0 && !failSilently) {
    throw new Error(`Missing fields: ${missingFields.join(', ')}`)
  }

  return serializedPayload
}
