import React from 'react';
import ToyCard from './ToyCard'

let ToyContainer = (props) => {
  // console.log(<data/>)
  let makeCards = props.database.map(entry => {
    return <ToyCard key={entry.id} entry={entry}/>
  })

  return(
    <div id="toy-collection">
      <ul>
        {
          makeCards
        }
      </ul>
    </div>
  )
}

export default ToyContainer;