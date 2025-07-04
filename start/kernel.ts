// import router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'


server.errorHandler(() => import('#exceptions/handler'))
// This sets a custom error handler.
// Any unhandled exception thrown in your app will be passed to this handler.
// You define this handler in the file at start/exceptions/handler.ts (usually extends BaseExceptionHandler).

server.use([
  () => import('#middleware/container_bindings_middleware'),
  () => import('#middleware/force_json_response_middleware'),
  () => import('@adonisjs/cors/cors_middleware'),
  () => import('#middleware/api_key_auth_middleware')
])

