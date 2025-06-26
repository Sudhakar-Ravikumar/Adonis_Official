import type { HttpContext } from '@adonisjs/core/http'
import Pet from '#models/pet'
import { storePetValidator } from '#validators/store_pet'

export default class PetsController {
  async index() {
    return await Pet.all()
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(storePetValidator)
    const pet = await Pet.create(data)
    return pet
  }

  async show({ params }: HttpContext) {
    const pet = await Pet.find(params.id)
    return pet ?? { message: 'Pet not found' }
  }
}
