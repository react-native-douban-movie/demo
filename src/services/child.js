import {request} from './../request'
export async function getList(){
  // return Promise.resolve({'data':1})
  return request(`https://api.douban.com/v2/movie/in_theaters`)
}