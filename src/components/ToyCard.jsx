import React, { Component } from 'react';

function ToyCard(props){
    const toy = props.entry
    const {name, likes, image} = toy

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={"Image of" + name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={() => props.incrementLike(toy)}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => props.deleteToy(toy)}>Donate to GoodWill</button>
      </div>
    );
}


export default ToyCard;
