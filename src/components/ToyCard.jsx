import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    console.log(this.props.entry)
    return (
      <div className="card">
        <h2>{this.props.entry.name}</h2>
        <img src={this.props.entry.image} alt={"Image of" + this.props.entry.name} className="toy-avatar" />
        <p>{this.props.entry.likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
