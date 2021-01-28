import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'

class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  toggleDisplay = () => {
    this.setState(prevState => {return {
      display: !prevState.display
    }})
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(r => r.json())
    .then(toys => this.setState({toys: toys}))
  }

  addToy = (toy) => {
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(toy)
    })
    .then(r => r.json())
    .then(newToy => {
      this.setState(prevState => {return {
        toys: [...prevState.toys, newToy]
      }})
    })
  }

  incrementLike = (toy) => {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({likes: toy.likes + 1})
    })
    .then(r => r.json())
    .then(updatedToy => {
      const allToysUpdated = this.state.toys.map(singleToy => singleToy.id === updatedToy.id ? updatedToy : singleToy)
      this.setState(prevState => {return {
        toys: allToysUpdated
      }})
    }
    )
  }

  deleteToy = (toy) => {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "DELETE"
      }
    )
    .then(r => r.json())
    .then(deletedToy => {
      const allToysUpdated = this.state.toys.filter(singleToy => singleToy.id !== toy.id)
      this.setState({toys: allToysUpdated})
    })

  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.toggleDisplay}> Add a Toy </button>
        </div>
      <ToyContainer database={this.state.toys} incrementLike={(toy) => this.incrementLike(toy)} deleteToy={(toy) => this.deleteToy(toy)}/>
      </>
    );
  }

}

export default App;
