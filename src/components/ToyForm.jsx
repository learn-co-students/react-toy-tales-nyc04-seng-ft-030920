import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    toy_name: "steph",
    toy_image: "url"
  }

  handleAllInput = (evt) => {
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addAToy(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input 
            type="text" 
            name="toy_name" 
            placeholder="Enter a toy's name..." 
            className="input-text"
            value={this.state.toy_name}
            onChange={this.handleAllInput}/>
          <br/>
          <input 
            type="text" 
            name="toy_image" 
            placeholder="Enter a toy's image URL..." 
            className="input-text"
            value={this.state.toy_image}
            onChange={this.handleAllInput}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
