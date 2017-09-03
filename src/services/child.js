import {request} from './../request'
console.warn(request)
export async function getList(){
  // return Promise.resolve({'data':1})
  return request(`http://api.douban.com/v2/movie/celebrity/1054395`)
}