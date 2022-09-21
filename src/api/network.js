import axios from 'axios'

// 进行全局配置
axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.timeout = 3000

// 封装自己的GET/POST 方法
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (response) {
          reject(response)
        })
    })
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (response) {
          reject(response)
        })
    })
  }
}
