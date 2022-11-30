import React from 'react'
import './app.css'
// import webpack from './assets/imgs/Webpack.webp'
import Class from '../src/components/Class'
import Home from '../src/views/Home'

function App() {
  return(
    <div>
        <h2>webpack5-react-ts</h2>
        {/* <img src={webpack} alt="" /> */}
        <Class/>
        <Home/>
    </div>
  ) 
}
export default App