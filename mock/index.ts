import { MockMethod } from 'vite-plugin-mock'
import navMenu from './data/navMenu'
export default [
  {
    url:'/mock/navMenu',
    method:'post',
    response:() => {
      return {
        code:0,
        message:'ok',
        data:navMenu,
      }
    },
  },
]