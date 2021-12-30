import axios from 'axios'

const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyDIqIh0MrhaLq-PDn6z-Bp50z_dMeLJsu8',
   },
})

export default request