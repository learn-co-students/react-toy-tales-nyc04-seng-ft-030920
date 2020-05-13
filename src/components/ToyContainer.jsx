import React from 'react';
import ToyCard from './ToyCard'


const ToyContainer = (props) => {
  let arrayOfCards = props.toyList.map((singleToy) => {
    return <ToyCard 
      singleToy = {singleToy}
      name={singleToy.name}
      key={singleToy.id}
      image={singleToy.image}
      likes={singleToy.likes}
      deleteToy = {props.handleDelete}
      updateToy = {props.handleUpdate}
    />
  })
  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {arrayOfCards}
    </div>
  );
}

export default ToyContainer;
