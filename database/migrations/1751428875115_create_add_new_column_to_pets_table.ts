import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddAgeToPets extends BaseSchema {
  protected tableName = 'pets'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('age').unsigned().nullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('age')
    })
  }
}
