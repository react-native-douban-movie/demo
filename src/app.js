import React from 'react';
// import {connect} from 'react-redux';
// import {Provider} from 'mobx-react';
// import DashboardStore from './store/DashboardStore'

import Child from './components/child';
class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <Child></Child>
    )
  }
}
// const mapStateToProps=(state)=>{
//   console.warn(state);
//   return state
// }
// export default connect(mapStateToProps)(App);
export default App;