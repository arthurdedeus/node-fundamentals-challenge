import { CreateTaskHandler, RetrieveTaskHandler } from './handlers.js'

import { buildRoutePath } from './utils/build-route-path.js'

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: CreateTaskHandler,
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: RetrieveTaskHandler,
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    // TODO: Implement handler
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    // TODO: Implement handler
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    // TODO: Implement handler
  },
]
