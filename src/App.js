import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  const {Children, PropTypes} = React
  const {render} = ReactDOM

  const findChild = (children, child) =>
    Children.toArray(children)
      .filter(c => c.type === child)[0]

  const WhenTruthy = ({children}) =>
    Children.only(children)

  //Although this variable is set to the Same value as the last one their child content (inner html) differs as you will see in the JSX
  const WhenFalsy = ({children}) =>
      Children.only(children)

  const Display = ({ifTruthy=true, children}) =>
    (ifTruthy) ?
      findChild(children,WhenTruthy) :
      findChild(children,WhenFalsy)

   const age = 19


  render() {
    return (

    );
  }//close render()


}//close <App />

export default App;
