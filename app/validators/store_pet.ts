import vine from '@vinejs/vine'
//You’re importing VineJS, the built-in validation library in AdonisJS v6.

function capitalizeFirstLetter(value: string) {
  //The value parameter must be a string
  //So this function only works if you pass a string to it.
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

export const storePetValidator = vine.compile(
  //vine.compile(...) Prepares the schema for validation 
  //validateUsing(...) expects a compiled schema 
  vine.object({
    //vine.object() is used to define a schema for an object.
    name: vine
      .string()
      .trim()
      .minLength(2)
      .maxLength(30)
      .regex(/^[A-Za-z ]+$/)  // Allows only letters and spaces
      .transform(capitalizeFirstLetter),
  })
)
//"vine.object() is used when the entire request body is expected to be an object, and we define validation rules for each field inside that object, such as vine.string() for strings, vine.number() for numbers, etc."