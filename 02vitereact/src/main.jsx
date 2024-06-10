import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function customRender(reactElement,container){
//   const domElement=document.createElement(reactElement.type);
//   domElement.innerHTML=reactElement.children;
//   domElement.setAttribute('href',reactElement.props.href)
//   domElement.setAttribute('target',reactElement.props.target)
//   container.appendChild(domElement);
// }


// const reactElement={
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children:'Click me to visit google'
// }

// const reactElement=React.createElement(
//   'a',
//   {
//     href:'https://google.com',
//     target:'_blank'
//   },
//   'click here for google'
// )

const mainContainer=document.querySelector('#root');

// customRender(reactElement,mainContainer)

const root=ReactDOM.createRoot(mainContainer);
root.render(
  <App/>
  // reactElement
)
