/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import PetsController from '#controllers/pets_controller'

// router.get('/pets', PetsController.index)
// router.resource('/pets', PetsController);
// router.resource('/pets', PetsController).apiOnly();
router.resource('/pets', PetsController).apiOnly();


