import React from 'react';
import logo from './logo.svg';
import './App.css';
import advice from './advice.jpg'
import axios from 'axios'


class App extends React.Component{
  constructor() {
  super() 
   this.state = {
     advice: ''
     }
  }
componentDidMount() {
this.fetchAdvice();
}
 fetchAdvice = () => {
 axios.get('https://api.adviceslip.com/advice')
   .then((response) => {
     const {advice} = response.data.slip;
     this.setState({advice: advice});
   })
   .catch((error) => {
     console.log(error)
   });
  
  }
 

  render() {
    const {advice} = this.state;
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
       
        <button className="button" onClick= {this.fetchAdvice} >CLICK ME TO ADVICE YOU</button>
      </div>
    <h2><marquee  width="0"direction="right">MAKE SURE YOU TAKE THE ADVICE SERIOUS: SirConfy Cares</marquee></h2>
    </div>
  );
  }
}

export default App;
