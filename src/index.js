import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const {Children} = React
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

 const age = 37

//<App />
ReactDOM.render(
    <Display ifTruthy={age>=21}>
      <WhenTruthy>
        <h1>You may pass</h1>
      </WhenTruthy>
      <WhenFalsy>
      <h1>Beat it Kid before I call your parents!!</h1>
      </WhenFalsy>
    </Display>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
