import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toyList: []
  }

  // READ
  componentDidMount(){
    fetch("http://localhost:3000/toys")
      .then(r => r.json())
      .then((allLists) => {
        this.setState({
          toyList: allLists
        })
      })
  }

  handleCreate = (newToy) => {
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newToy)
    }).then(r => r.json()).then((newMadeToy) => {
      let copyOfMasterToyList = [...this.state.toyList, newMadeToy]
      this.setState({
        toyList: copyOfMasterToyList
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleDelete = (idOfToy) => {
    fetch(`http://localhost:3000/toys/${idOfToy}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then((deletedToy) => {
      let copyOfToyList = this.state.toyList.filter((singleToy) => {
        return singleToy.id !== idOfToy
      })
      this.setState({toyList: copyOfToyList})
    })
  }

  handleUpdate = (singleToy) => {
    fetch(`http://localhost:3000/toys/${singleToy.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        likes: singleToy.likes + 1
      })
    }).then(r => r.json())
    .then((updatedToy) => {
      let copyOfMasterToyList = this.state.toyList.map((oneToy)=>{
        return (oneToy.id === updatedToy.id ? updatedToy : oneToy)
      })
      this.setState({
        toyList: copyOfMasterToyList
      })
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display ? <ToyForm
          handleCreate = {this.handleCreate}
        /> : null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
        toyList={this.state.toyList}
        handleDelete={this.handleDelete}
        handleUpdate={this.handleUpdate}
        />
      </>
    );
  }

}

export default App;
