import './App.css'
import { useState } from 'react'
import Data from './components/quotes.json'
import Quote from './components/QuoteBox.jsx'
import Button from './components/Button.jsx'

function App() {

  let randomQuote = Math.floor(Math.random()*102)

  const [color, setColor] = useState('violet')
  const [quote, setQuote] = useState(Data[randomQuote])

  function changeColor (){

    let color = Math.floor(Math.random()*5)

    if(color === 0){
      setColor('blue')
    } else if(color === 1){
      setColor('violet')
    } else if(color === 2){
      setColor('yellow')
    } else if(color === 3){
      setColor('red')
    } else if(color === 4){
      setColor('green')
    }
  }

  function changeQuotes (){

    randomQuote = Math.floor(Math.random()*102)
    setQuote(Data[randomQuote])

    changeColor()
    
  }

  return (
    <div className="app">
      <div className={'bg-color ' + color} >
        <div className="QuoteBox">
          <Quote quote={quote}/>
          <Button changeQuote={changeQuotes} color={color}/>
        </div>
      </div>
    </div>
  )
}

export default App
