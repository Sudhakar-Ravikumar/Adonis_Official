import vine from '@vinejs/vine'

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

export const storePetValidator = vine.compile(
  vine.object({
    name: vine
      .string()
      .trim()
      .minLength(2)
      .maxLength(30)
      .regex(/^[A-Za-z ]+$/)  // ✅ Allows only letters and spaces
      .transform(capitalizeFirstLetter),
  })
)
