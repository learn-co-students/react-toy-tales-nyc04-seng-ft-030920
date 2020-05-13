import React, { Component } from 'react';


class ToyForm extends Component {
  
  state = {
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

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.handleCreate(this.state)
  
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." value={this.state.name} onChange={this.handleAllInput} className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..."  value={this.state.image} onChange={this.handleAllInput} className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
