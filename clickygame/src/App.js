import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    highScore: 0,
    status: ""
  };

  clickImage = event => {
    const character = event.target.alt;
    const characterClicked = this.state.clickedCharacters.indexOf(character) > -1;

    if (characterClicked) {
      this.setState({ clickedCharacters: [], score: 0, highScore: this.score, status:  "Game Over! Click to play again." });
      
      for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
      return characters;
    }
    
    else if
    (this.state.clickedCharacters.length === 9) {
      this.setState({highScore: 9, status: "You Won! Click to play again.", clickedCharacters: []});
      return;
    }

    else {
      this.setState.score ++
    }


  };

  render() {
    return (
    <div>
      <NavBar
        score = {this.state.score}
        highScore={this.state.highScore}
      />
      <Jumbotron />
      <div className= "container row">
      {this.state.characters.map(characters => (
        <CharacterCard
            clickImage={this.clickImage}
            id={characters.id}
            key={characters.id}
            image={characters.image}
        />

      ))}
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
