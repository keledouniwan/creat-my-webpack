import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

// @ts-ignore
if (module && module.hot) {
  // @ts-ignore
  module.hot.accept()
  console.log('hot')
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)