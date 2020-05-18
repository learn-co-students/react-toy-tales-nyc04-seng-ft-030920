import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  let arrayOfToys = props.toys.map((singleToy) => {
    return <ToyCard 
      key={singleToy.id}
      toy={singleToy}
      deleteAToy={props.deleteAToy}
      updateLikes={props.updateLikes}
      />
  })
  return(
    <div id="toy-collection">
      {arrayOfToys}
    </div>
  );
}

export default ToyContainer;
