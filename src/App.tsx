import React from 'react'
import './app.css'
// import webpack from './assets/imgs/Webpack.webp'
import Class from '../src/components/Class'
import Home from '../src/views/Home'

//JSX是什么？
//概念:JSX是JavaScript XML(HTML)的缩写，表示JS代码中书写HTML结构
//作用:React中创建HTML结构(页面UI结构)
//优势:1.采用类似于HTML的语法，降低学习成本，会HTML就会JSX
//2.充分利用JS自身的可编程能力创建HTML结构
//注意：JSX并不是标准的JS语法，是JS的语法扩展，浏览器默认是不识别的，脚手架内置的@babel/plugin-transform-react-jsx包，用来解析该语法

const name = 'AshtarteKk' //识别常规的变量
const getAge = ()=>{  //原生js方法的调用
  return 18
}
let flag = true
const handleFlag = ()=>{
  flag = !flag
}

//react如何完成列表渲染
//技术方案:map 重复渲染的是哪个模板就return谁
//注意事项:遍历列表时同样需要一个类型为number/string不可重复的key 提高diff性能
const songs = [
  { id:1,name:'富士山下'},
  { id:2,name:'单车'},
  { id:3,name:'孤勇者'},
]

function App() {
  return(
    <div>
        <h2>webpack5-react-ts</h2>
        <br />
        <h2>name:{name}</h2>
        <h2>age:{getAge()}</h2>
        <h2>{flag ? 'true' : 'false'}</h2>
        <button onClick={handleFlag}>Flag</button>
        {/* <img src={webpack} alt="" /> */}
        <br />
        <Class/>
        <Home/>
        <div>
          <ul>
            { songs.map(song=> <li key={song.id}>id:{song.id},name:{song.name}</li>) }
          </ul>
        </div>
    </div>
  ) 
}
export default App