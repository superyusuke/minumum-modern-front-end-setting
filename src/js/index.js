import '../scss/index.scss'

import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const obj1 = {value: 1}
const obj2 = {value: 2}
const obj3 = {test: 'heyheyhey'}
const nera = {...obj1, ...obj2, ...obj3}
console.log(nera)

const nera1 = ({test}) => console.log(test)

nera1(nera)

const mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);