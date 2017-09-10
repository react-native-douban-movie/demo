import {request} from './../request';
export async function getMovieList(value){
  // return Promise.resolve({'data':1})
  return request(`https://api.douban.com/v2/movie/search?q=${value}`);
}