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

componentDidMount(){
  fetch('http://localhost:3000/toys')
    .then(r => r.json())
    .then(toyData => {
      this.setState({
        toyList: toyData
      })
    })
}

addOneToy = (toyData) => {
  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(toyData)
  })
  .then(r => r.json())
  .then(newToy => {
    let toyListCopy = [...this.state.toyList, newToy]
    this.setState({
      toyList: toyListCopy
    })
  })
}

addOneLike = (toy) => {
  fetch(`http://localhost:3000/toys/${toy.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({likes: toy.likes + 1})
  })
  .then(r => r.json())
  .then(updatedToy => {
    let toyListCopy = this.state.toyList.map(singleToy => (singleToy.id === updatedToy.id) ? updatedToy : singleToy)
    this.setState({
      toyList: toyListCopy
    })
  })
}

deleteOneToy = (toyId) => {
  fetch(`http://localhost:3000/toys/${toyId}`, {
    method: 'DELETE'})
    .then(r => r.json())
    .then(deletedToy => {
      let toyListCopy = this.state.toyList.filter(singleToy => singleToy.id !== toyId)
      this.setState({
        toyList: toyListCopy
      })
    })
}

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm
            addOneToy={this.addOneToy}
          />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
          toyList={this.state.toyList} 
          deleteOneToy={this.deleteOneToy} 
          addOneLike={this.addOneLike}
        />
      </>
    );
  }
}

export default App;
