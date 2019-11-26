import axios from 'axios'

const charactersService = (page: number) => {
  return axios({
    method: 'GET',
    url: `https://www.breakingbadapi.com/api/characters`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    throw error
  })
}

export default charactersService

