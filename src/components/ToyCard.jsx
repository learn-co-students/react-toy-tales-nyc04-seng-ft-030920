import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = (evt) => {
    this.props.deleteAToy(this.props.toy.id)  
  }

  handleLike = (evt) => {
    let newLikesValue = this.props.toy.likes + 1
    this.props.updateLikes(this.props.toy.id, newLikesValue)
  }

  render() {
    let {name, image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p> {likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
