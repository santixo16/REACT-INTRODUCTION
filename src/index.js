import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//*const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>
//);

const Li = ({ children, estado, age, casa }) =>{
  console.log(age, casa)
  return(
    <li>{children} estoy {estado}</li>
  )
} 
const Test = () => 
  <ul>
    <Li estado={'feliz'}
        age={19}
        casa={false}>
        Chachito
    </Li>
    <Li estado={'triste'}>Chachito</Li>
    <Li estado={'enocionado'}>Felix</Li>
  </ul>

ReactDOM.render(
  <Test />, document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
