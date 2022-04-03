import React, { Component } from 'react'
// import CardData from './components/CardData';
import {allGiftCards} from './Data'
import './index.css';
import './App';

// Using the array below, render a list of cards, showing the name and currencies which they can be exchanged for. Any UI at all can be used as long as it is presentable.

// Deploy and host the app on github.
// Note: If you don’t know how to host a react app on github, use the link below;
// https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/


class App extends React.Component{
   constructor(props){
     super(props)
     this.state = {
      data:allGiftCards
    };
   }
  render(){
  
    return (
      <div className="container">
        <h1>currency name and currencies which they can be exchanged for</h1>
      <div className="card">
      <div className='box'>
          {this.state.data.map((cards)=>{
          return(
            
            <div key={cards.id} className="content">
                <div className="content-cotainer">
                   <h3>{cards.title}</h3>

              {
                (Array.isArray(cards.currencies))?
              <div>
                {
                  cards.currencies.map((curr, i)=>{
                    console.log(curr)
                    return (
                      <ul>
                        <li>{curr}</li>
                      </ul>
                    )
                    
                  })
                }
              </div>:
              null
              }
                </div>

            </div>
          )
        })}
      </div>
  
      </div> 
      <p> kodekamp 2, react intermediate Task (rajiss-ctrl)</p>       
      </div>

    )
  }
  
}

export default App