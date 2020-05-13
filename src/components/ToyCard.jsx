import React, { Component } from 'react';

class ToyCard extends Component {

  handleToyDelete = (evt) => {
    this.props.deleteToy(this.props.singleToy.id)
  }

  handleToyUpdate = (evt) => {
    this.props.updateToy(this.props.singleToy)
  }


  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button className="like-btn" onClick ={this.handleToyUpdate}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleToyDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
