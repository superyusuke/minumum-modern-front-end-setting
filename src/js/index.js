import '../scss/index.scss'
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}
const url = 'http://api.myjson.com/bins/159wqn'
const asyncFunc = async url => {
  console.log(await fetch(url))
}

asyncFunc(url).then(() => console.log('done'))

const obj1 = { value: 1 }
const obj2 = { value: 2 }
const obj3 = { test: 'hey' }
const combinedObject = { ...obj1, ...obj2, ...obj3 }
console.log(combinedObject)

const func1 = ({ test }) => console.log(test)

func1(combinedObject)

const mountNode = document.getElementById('app')
ReactDOM.render(<HelloMessage name="Jane" />, mountNode)

if (true === true) console.log('test')
