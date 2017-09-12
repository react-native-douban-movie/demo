import {request} from './../request';
export async function getMovieList(value){
  // return Promise.resolve({'data':1})
  return request(`https://api.douban.com/v2/movie/search?q=${value}`);
}

export async function getHotMovieList() {
  return request(`https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=40&page_start=0`);
}

export async function getHotTVList() {
  return request(`https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=40&page_start=0`);
}