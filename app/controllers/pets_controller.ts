import type { HttpContext } from '@adonisjs/core/http'
import Pet from '#models/pet'
import { storePetValidator } from '#validators/store_pet'

export default class PetsController {
  async index() {
    const pets = await Pet.all()
    console.log(pets)
    //Outputs: [Pet { ... }, Pet { ... }]
    // const result = Pet.all() // ← a Promise, not the actual data
    // console.log(result) // Outputs: Promise { <pending> }
    return pets
    //AdonisJS automatically converts your return value to JSON when you return it from a controller method without manually using response.json().
  }
  
  
  async store({ request }: HttpContext) {
    const data = await request.validateUsing(storePetValidator)
    //Extracts only the request body (request.body())
    //If the field is not defined in the validator, and you're using , The validation will fail ,
    //A 422 error is thrown immediately
    const pet = await Pet.create(data)
    //Pet.create(...) is a Lucid ORM function that inserts the new pet into your database table.
    return pet
  }

  async show({ params, response }: HttpContext) {
    //params contains route parameters like :id
    //response is an object that Adonis injects into your controller method via the HttpContext.
  const id = Number(params.id)
    //Converts the string route param (e.g., '5') to a number.
    
  if (isNaN(id) || id <= 0 || !Number.isInteger(id)) {
    return response.status(400).json({
      error: 'Invalid pet ID. It must be a positive integer.'
    })
  }

  const pet = await Pet.find(id)
  return pet ?? { message: 'Pet not found' }
}

  async update({ params, request, response }: HttpContext) {
    const id = Number(params.id)

    if (isNaN(id) || id <= 0 || !Number.isInteger(id)) {
      return response.status(400).json({
        error: 'Invalid pet ID. It must be a positive integer.'
      })
    }

    const pet = await Pet.find(id)

    if (!pet) {
      return response.status(404).json({ message: 'Pet not found' })
    }

    const data = await request.validateUsing(storePetValidator)
    pet.merge(data) // update fields
    //.merge() with unknown fields -- Ignored silently by Lucid
    //It won’t add the field or store it in the database.
    //Updates the available fields
    await pet.save()

    return pet
  }

  async destroy({ params, response }: HttpContext) {
    const id = Number(params.id)

    if (isNaN(id) || id <= 0 || !Number.isInteger(id)) {
      return response.status(400).json({
        error: 'Invalid pet ID. It must be a positive integer.'
      })
    }

    const pet = await Pet.find(id)

    if (!pet) {
      return response.status(404).json({ message: 'Pet not found' })
    }

    await pet.delete()

    return { message: 'Pet deleted successfully' }
  }
}