import {request} from './../request';
export async function getMovieDetail(id){
  // return Promise.resolve({'data':1})
  return request(`https://api.douban.com/v2/movie/subject/${id}`)
}
