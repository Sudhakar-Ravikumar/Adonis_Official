import Cat from '#models/cat'
// import type { HttpContext } from '@adonisjs/core/http'
export default class CatsController {
 async index() {
      const cats = await Cat.all()
      console.log(cats)
      return cats
    }
  }
  
  

// async index({ response }: { response: HttpContext['response'] }) {
//       const cats = await Cat.all()
//       return response.json(cats)
//     }