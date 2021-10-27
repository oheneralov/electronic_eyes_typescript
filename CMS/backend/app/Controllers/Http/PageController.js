'use strict'

const Page = use('App/Models/Page')
const { validateAll } = use('Validator')
const Logger = use('Logger')
const moment = require('moment')

class PageController {
  /**
   * Handle the request to get all pages
   */
  async index ({ response }) {
    try {
      const pages = {
        data: {
          pages: [
            {
              url: '/frontend/home',
              name: 'home',
              title: 'home',
              menu: 'home',
              content: `The following products and services are offered for our customers:

              Application which helps blind people to 'see' the surrounding objects with the help of AI-based software.
              Service which converts your photo into a cartoonized one.
              Congratulation on the behalf of a cartoon.`,
              type: 'static'
            },
            {
              url: '/frontend/solution',
              name: 'solution',
              title: 'solution',
              menu: 'solution',
              content: `Solution For Blind People

              The project goal is to create electronic eyes for blind people which will be provided free of charge to them. Electronic eyes will be an electronic appliance which can function on the basis of the artificial intelligence. Since blind people cannot see, the artificial intelligence can see instead of them and voice the surrounding objects.
              
              2.2 billion people have a vision impairment or blindness
              The majority of people with vision impairment are over the age of 50 years.
              Blindness is a very serious problem. It is the inability to see anything even light.
              
              Support on patreon`,
              type: 'static'
            },
            {
              url: '/frontend/birthday',
              name: 'birthday',
              title: 'Birthday',
              menu: 'birthday',
              content: `Birthday Present

              Just imagine how your child or friend will be happy if he/she will be congratulated by a cartoon heroe in Youtube.
              
              It will be really cool!
              
              Contact us and it will be done just for 10$.`,
              type: 'static'
            },
            {
              url: '/frontend/cartoonizer',
              name: 'cartoonizer',
              title: 'cartoonizer',
              menu: 'cartoonizer',
              content: `Convert your photo into a cartoon

              Just for 5$ your photo will be converted into a cartoon`,
              type: 'static'
            },
            {
              url: '/frontend/contact-us',
              name: 'contact us',
              title: 'contac tus',
              menu: 'contact us',
              content: `If you have questions or would like to order one of our prodcts please contact us by e-mail:

              electroniceyesai@gmail.com`,
              type: 'static'
            }
          ]
        }

      }
      // await Page.all()
      return response.status(200).json({ pages })
    } catch (e) {
      console.log(e.message)
    }
  }

  /**
   * Handle the request to create a page.
   */
  async store ({ request, response }) {
    try {
      const { title, start_date, end_date, location, price } = request.all() // es-lint-ignore
      const page = await Page.create({
        title,
        start_date,
        end_date,
        location,
        price
      })

      return response.status(201).json({ page })
    } catch (e) {
      console.log(e.message)
    }
  }

  /*
   * Getting the page to edit
   */
  async edit ({ params, response }) {
    /**
     * Finding the page.
     *
     * ref: http://adonisjs.com/docs/4.1/lucid#_findorfail
     */
    const page = await Page.findOrFail(params.id)

    return response.status(200).json(page)
  }

  /*
   * Saving changes to rhe page
   */
  async update ({ params, request, response }) {
    try {
      /**
       * Getting needed parameters.
       *
       * ref: http://adonisjs.com/docs/4.1/request#_only
       */
      const data = request.only([
        'id',
        'title',
        'start_date',
        'end_date',
        'location',
        'price'
      ])

      data.start_date = moment(data.start_date).format('YYYY-MM-DD hh:mm:ss')
      data.end_date = moment(data.end_date).format('YYYY-MM-DD hh:mm:ss')

      /**
       * Validating our data.
       *
       * ref: http://adonisjs.com/docs/4.1/validator
       */
      const validation = await validateAll(data, {
        id: 'required',
        title: 'required',
        location: 'required',
        price: 'required'
      })

      /**
       * If validation fails, early returns with validation message.
       */
      if (validation.fails()) {
        console.log('validation error')
        return response.status(500).json({ message: 'validation error' })
      }

      /**
       * Finding the mapping and updating fields on it
       * before saving it to the database.
       *
       * ref: http://adonisjs.com/docs/4.1/lucid#_inserts_updates
       */
      const page = await Page.findOrFail(data.id)
      page.merge(data)
      await page.save()

      return response.status(200).json({
        message: 'page was updated successfully'
      })
    } catch (e) {
      console.log(e.message)
      return response.status(500).json({ message: e.message })
    }
  }

  /**
   * Handle the request to delete an page
   */
  async delete ({ params, response }) {
    const page = await Page.find(params.id)

    await page.delete()

    return response.status(200).json({
      message: 'page deleted successfully.'
    })
  }
}

module.exports = PageController
