'use strict'

const Schema = use('Schema')

class PageSchema extends Schema {
  up () {
    this.create('pages', (table) => {
      table.increments()
      table.string('title')
      table.datetime('start_date')
      table.datetime('end_date')
      table.string('location')
      table.integer('price')
      table.timestamps()
    })
  }

  down () {
    this.drop('pages')
  }
}

module.exports = PageSchema
