import axios from 'axios'

export default class ApiService {
  http: any;

  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:3333/api'
    })
  }

  getPages = async () => {
    return this.http.get(`/pages`)
  }

  storePage = async (page: object) => {
    try{
      return this.http.post(`/pages`, page)
    } catch(err) {
      console.log('storePage: Error! Could not create a page ' + err.message)
    }
  }

  updatePage = async (page: object) => {
    try{
      return this.http.post(`/pages/update`, page)
    } catch(err) {
      console.log('updatePage: Error! Could not update a page ' + err.message)
    }
  }

  deletePage = async (id: number) => {
    return this.http.delete(`/pages/${id}`)
  }

  editPage = async (id: number) => {
    return this.http.get(`/pages/edit/${id}`)
  }
}
