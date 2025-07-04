  import { BaseModel, column } from '@adonisjs/lucid/orm'
  //BaseModel: The base class that all models in AdonisJS should extend.
  //Column -- "Map this name property to the name column in the database table."
  export default class Pet extends BaseModel {
    //extends BaseModel: This means the Pet class inherits all the database functionality from BaseModel, like querying, saving, etc.
    @column({ isPrimary: true })
    public id!: number
    //@column({ isPrimary: true }): This marks the id field as a database column and sets it as the primary key.
    //public id!: number: This defines a public field named id that must be a number.
    //This ! means: “I promise it won’t be undefined”

    @column()
    public name!: string
    //@column(): This marks name as a regular database column (not a primary key).
    //public name!: string: Declares a public field name of type string, which also will be set at runtime.
    
  }
