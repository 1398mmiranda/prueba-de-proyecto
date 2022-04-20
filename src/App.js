import React, { Component } from "react" ;
import logo from './logo.svg';
import './App.css';

//function Welcome(props) {
  //return <h1>Hello, {props.name} {props.last}</h1>;
//}

//const Welcome = (props) => <p>{props.name} {props.last}</p>
class Welcome extends Component{
  render(){
    return<h2>{this.props.name} { this.props.last}</h2>
  }
}

class Text extends Component {
  render(){
    return (
        <div ><p> {this.props.number} </p>
              <p>{this.props.Text}</p>
        </div>
      )     
  }
    
  }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Sara" last="carrillo" />
        < Text number={2}  Text="texto en string" />
      </header>
     
    </div>
    
  );
  
}


