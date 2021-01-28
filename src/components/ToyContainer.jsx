import React from 'react';
import ToyCard from './ToyCard'

let ToyContainer = (props) => {

  return(
    <div id="toy-collection">
      <ul>
        {
          props.database.map(entry => {
            return <ToyCard key={entry.id} entry={entry} incrementLike={props.incrementLike} deleteToy={props.deleteToy}/>
          })
        }
      </ul>
    </div>
  )
}

export default ToyContainer;