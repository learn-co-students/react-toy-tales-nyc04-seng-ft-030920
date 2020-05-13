import React, { Component } from 'react';

class ToyForm extends Component {

  state={
    name: "",
    image: "",
    likes: 0
  }

  handleAllInput = (evt) => {
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addOneToy(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleOnSubmit}>
          <h3>Create a toy!</h3>
          <input 
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
            autoComplete="off"
            value={this.state.name}
            onChange={this.handleAllInput}
            />
          <br/>
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
            autoComplete="off"
            value={this.state.image}
            onChange={this.handleAllInput}
            />
          <br/>
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"/>
        </form>
      </div>
    );
  }
}

export default ToyForm;
