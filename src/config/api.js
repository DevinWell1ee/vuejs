import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = ''
axios.defaults.timeout = 10000

// axios serializes JavaScript objects to JSON
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(config => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  config.headers['Expires'] = '-1'
  config.headers['Cache-Control'] = 'no-cache,no-store,must-revalidate,max-age=-1,private'

  return config
}, error => {
  console.error(error)
  return Promise.reject(error)
})

let handler = {
  get (target, property) {
    target[property] = (url, params = {}) => {
      return axios({
        url,
        method: property,
        ...params
      })
      .then(response => response.data.data)
      .catch(error => error)
    }

    return target[property]
  }
}

const API = new Proxy({}, handler)

export default API
