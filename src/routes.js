import {
  CreateTaskHandler,
  DeleteTaskHandler,
  RetrieveTaskHandler,
  UpdateTaskHandler,
} from './handlers.js'

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
    handler: UpdateTaskHandler,
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: DeleteTaskHandler,
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    // TODO: Implement handler
  },
]
