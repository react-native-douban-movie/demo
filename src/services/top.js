import {request} from './../request';
export async function getMovieList(value){
  // return Promise.resolve({'data':1})
  return request(`https://api.douban.com/v2/movie/search?q=${value}`);
}

export async function getHotMovieList() {
  return request(`https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=5&page_start=0`);
}

export async function getHotTVList() {
  return request(`https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=5&page_start=0`);
}

//最新

export async function getNewMovieList() {
  return request(`https://movie.douban.com/j/search_subjects?type=movie&tag=%E6%9C%80%E6%96%B0&page_limit=5&page_start=0`);
}

//高分电影
export async function getTopMovieList() {
  return request(`https://movie.douban.com/j/search_subjects?type=movie&tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&page_limit=5&page_start=0`);
}
//华语电影
export async function getChinaMovieList() {
  return request(`https://movie.douban.com/j/search_subjects?type=movie&tag=%E5%8D%8E%E8%AF%AD&page_limit=5&page_start=0`);
}
//冷门电影
export async function getColMovieList() {
  return request(`https://movie.douban.com/j/search_subjects?type=movie&tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&page_limit=5&page_start=0`);
}
//欧美电影
export async function getWestMovieList() {
  return request(`https://movie.douban.com/j/search_subjects?type=movie&tag=%E6%AC%A7%E7%BE%8E&page_limit=5&page_start=0`);
}

//热门电视剧

export async function getNewTVList() {
  return request(`https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=5&page_start=0`);
}

//美剧
export async function getUSTVList() {
  return request(`https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%BE%8E%E5%89%A7&sort=recommend&page_limit=5&page_start=0`);
}
//英国电视剧
export async function getUKTVList() {
  return request(`https://movie.douban.com/j/search_subjects?type=tv&tag=%E8%8B%B1%E5%89%A7&sort=recommend&page_limit=5&page_start=0`);
}
//韩剧电视剧
export async function getKOTVList() {
  return request(`https://movie.douban.com/j/search_subjects?type=tv&tag=%E9%9F%A9%E5%89%A7&sort=recommend&page_limit=5&page_start=0`);
}
//综艺电视剧
export async function getHATVList() {
  return request(`https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%BB%BC%E8%89%BA&sort=recommend&page_limit=5&page_start=0`);
}