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

  async show({ params, response }: HttpContext) {
  const id = Number(params.id)

  if (isNaN(id) || id <= 0 || !Number.isInteger(id)) {
    return response.status(400).json({
      error: 'Invalid pet ID. It must be a positive integer.'
    })
  }

  const pet = await Pet.find(id)
  return pet ?? { message: 'Pet not found' }
}

}
