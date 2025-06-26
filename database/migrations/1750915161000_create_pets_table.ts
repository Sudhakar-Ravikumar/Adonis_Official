import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Pets extends BaseSchema {
  protected tableName = 'pets'

  async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // primary key
      table.string('name')   // name of pet
      table.timestamps(true) // created_at and updated_at
    })
  }

  async down () {
    this.schema.dropTable(this.tableName)
  }
}
