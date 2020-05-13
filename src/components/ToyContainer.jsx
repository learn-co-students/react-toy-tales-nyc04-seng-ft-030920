import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  let arrayOfCards = props.toyList.map((singleToy) => {
    return <ToyCard
      toy={singleToy}
      key={singleToy.id}
      deleteOneToy={props.deleteOneToy}
      addOneLike={props.addOneLike}
      />
  })
  return(
    <div id="toy-collection">
      <ul>
        {arrayOfCards}
      </ul>
    </div>
  );
}

export default ToyContainer;
