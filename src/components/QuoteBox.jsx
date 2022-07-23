import React from 'react'

const QuoteBox = ({quote}) => {
  return (
    <div className="quote">
        <div className="phrase">
            <i class="fa-solid fa-quote-left"></i>
            <p>{quote.quote}</p>
        </div>
        <div className="author">
            <p>{quote.author}</p>
        </div>
    </div>
  )
}

export default QuoteBox