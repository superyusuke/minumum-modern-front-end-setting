import '../scss/index.scss' // sass を読み込む
import 'babel-polyfill' // async 系で必要っぽい

import React from 'react'
import ReactDOM from 'react-dom'

// react component
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

// render react component
const mountNode = document.getElementById('app')
ReactDOM.render(<HelloMessage name="Jane" />, mountNode)

// async / await
const url = 'http://api.myjson.com/bins/159wqn'
const asyncFunc = async url => {
  console.log(await fetch(url), 'fetch result')
}

asyncFunc(url).then(() => console.log('fetch done (in then)'))

// object rest spread
const obj1 = { value: 1 }
const obj2 = { value: 2 }
const obj3 = { test: 'hey' }
const combinedObject = { ...obj1, ...obj2, ...obj3 }
console.log(combinedObject, 'combined object')


const func1 = ({ test }) => console.log(test)
func1(combinedObject)
