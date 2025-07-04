import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cat extends BaseModel {
  public static table = 'cats' // optional if name is same as plural of model

  @column({ isPrimary: true })
  public id!: number

  @column()
  public name!: string

  @column()
  public age!: number

  @column()
  public breed!: string
}
