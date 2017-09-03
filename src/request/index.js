
const defaultOptions = {
  // ignoreError: false
  // withCredentials: true
};
export function request(url,options){
  options = {
    ...defaultOptions,
    ...options
  }
  return fetch(url,options)
    .then((res)=>{
      return res.json()
    })
}