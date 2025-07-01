import router from '@adonisjs/core/services/router'
//Imports the router service from AdonisJS.
//This lets you define HTTP routes (like GET, POST, PUT, DELETE).
import type { HttpContext } from '@adonisjs/core/http'
//Imports the HttpContext type, which contains information about the HTTP request and response.
import PetsController from '#controllers/pets_controller'


router
  .resource('/pets', PetsController)
  .apiOnly()
  .where('id', /^[0-9]+$/)
//Automatically creates RESTful routes like:
// - GET /pets
// - POST /pets
// - GET /pets/:id
// - PUT /pets/:id
// - PATCH /pets/:id
// - DELETE /pets/:id 
// node ace list:routes
//.apiOnly() removes create and edit routes (used in HTML forms).

// ✅ Catch-all fallback route (MUST be last)
// ✅ Shared 404 handler function
function handleInvalidRoute({ response }: HttpContext) {
  return response.status(404).json({
    error: 'Invalid path',
    available_paths: [
      'GET /pets',
      'POST /pets',
      'GET /pets/:id',
      'PUT /pets/:id',
      'PATCH /pets/:id',
      'DELETE /pets/:id'
    ]
  })
}

// ✅ Catch-all fallback for all HTTP methods
router.get('*', handleInvalidRoute)
router.post('*', handleInvalidRoute)
router.put('*', handleInvalidRoute)
router.patch('*', handleInvalidRoute)
router.delete('*', handleInvalidRoute)

//Adonis looks at the routes from top to bottom.
// It checks: "Do I have a route that matches this request?"
// If it finds one in the earlier routes (like /pets, /pets/:id), it uses that.
// If none of the earlier routes match, it reaches the wildcard '*' — the "catch-all".
//.get('*', ...) means: “Catch all unmatched GET requests.”