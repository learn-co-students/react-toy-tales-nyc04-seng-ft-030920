import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'

class App extends React.Component{

  state = {
    display: false,
    allToys: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
      .then(resp => resp.json())
      .then((fetchedToys) => {
        this.setState({ allToys: fetchedToys })
        console.log(fetchedToys)

      })
  }

  deleteAToy = (idOfToyToDelete) => {
    fetch(`http://localhost:3000/${idOfToyToDelete}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then((deletedToy) => {
        let copyOfAllToys = this.state.allToys.filter((singleToy) => {
          return singleToy.id !== idOfToyToDelete
        })
        this.setState({
          allToys: copyOfAllToys
        })
      })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  
  updateLikes = (toyId, likes) => {
    fetch(`http://localhost:3000/${toyId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        likes: likes
      })
    })
      .then(resp => resp.json())
      .then(updatedToy => {
        let copyOfAllToys = this.state.allToys.map((eachToy) => {
          return (eachToy.id === updatedToy.id ? updatedToy : eachToy)
        })
        this.setState({
          allToys: copyOfAllToys
        })
      })
  }

  addAToy = (newToy) => {
    let copyOfToy = {...newToy, likes: 0 }
    fetch(`http://localhost:3000/toys`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify(copyOfToy)
  })
    .then(resp => resp.json())
    .then(newlyCreatedToy => {
      let copyOfState = [...this.state.allToys, newlyCreatedToy]
      this.setState({
        allToys: copyOfState
      })
    })
  }
  

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addAToy={this.addAToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={this.state.allToys}
          deleteAToy={this.deleteAToy}
          updateLikes={this.updateLikes}
        />
      </>
    );
  }

}

export default App;
