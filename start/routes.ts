import router from '@adonisjs/core/services/router'
import type { HttpContext } from '@adonisjs/core/http'
import PetsController from '#controllers/pets_controller'

// ✅ Actual REST API routes
router.resource('/pets', PetsController).apiOnly()

// ✅ Catch-all fallback route (MUST be last)
router.get('*', ({ response }: HttpContext) => {
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
})
