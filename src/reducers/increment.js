const initialState = {
  count:1
}

export default INCREMENT=(state=initialState,action)=>{
  console.warn(action);
  return {count:8}
}