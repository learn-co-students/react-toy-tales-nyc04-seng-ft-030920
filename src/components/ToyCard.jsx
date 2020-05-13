import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = () => {
    this.props.deleteOneToy(this.props.toy.id)
  }

  handleToyUpdate = () => {
    this.props.addOneLike(this.props.toy)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.handleToyUpdate}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
