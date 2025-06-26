// Top of pets_controller.ts
const pets = [
  { id: 1, name: 'Dog' },
  { id: 2, name: 'Cat' },
]

import type { HttpContext } from '@adonisjs/core/http'

export default class PetsController {
  async index() {
    return pets
  }

  async store({ request }: HttpContext) {
    const body = request.only(['name'])
    const newPet = { id: pets.length + 1, name: body.name }
    pets.push(newPet)
    return newPet
  }

  async show({ params }: HttpContext) {
    return pets.find((p) => p.id === Number(params.id)) || { message: 'Pet not found' }
  }

  async update({ params, request }: HttpContext) {
    const pet = pets.find((p) => p.id === Number(params.id))
    if (!pet) return { message: 'Pet not found' }
    pet.name = request.input('name')
    return pet
  }

  async destroy({ params }: HttpContext) {
    const index = pets.findIndex((p) => p.id === Number(params.id))
    if (index === -1) return { message: 'Pet not found' }
    return pets.splice(index, 1)[0]
  }
}
