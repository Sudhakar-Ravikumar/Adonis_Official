import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pet extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public name!: string
}
