import { BaseSchema } from '@adonisjs/lucid/schema'
//This imports the **base class** for writing migrations in AdonisJS.
//All migration files should **extend** `BaseSchema`.
export default class Pets extends BaseSchema {
  protected tableName = 'pets'
// The property tableName is only meant to be used inside the class and its parent (BaseSchema)
// You don’t need it to be accessed from outside the migration class
// It prevents accidental access or modification from outside
  async up () {
    // This is the method AdonisJS runs when you apply the migration:
    this.schema.createTable(this.tableName, (table) => {
      //this refers to the current instance of the Pets migration class, which extends BaseSchema.
      //schema -- 	A schema builder for defining DB structure
      table.increments('id') // primary key
      table.string('name')   // name of pet
      table.timestamps(true) // created_at and updated_at
    })
  }

  async down () {
    this.schema.dropTable(this.tableName)
  }
}
