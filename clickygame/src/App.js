import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
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

    if (this.state.clickedCharacters.indexOf(character) > -1) {
      this.setState({ clickedCharacters: [], score: 0, highScore: this.score, status:  "Game Over! Click to play again." });
      for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
      return characters;

    }
    else if 
    (this.state.clickedCharacters.length === 12) {
      this.setState({highScore: 12, status: "You Won! Click to play again.", clickedCharacters: []});
      return;
    }
  }

  render() {
    return (
    <Wrapper>
      <NavBar />
      <Jumbotron />
      {this.state.characters.map(characters => (
        <CharacterCard
            clickCharacter={this.clickCharacter}
            id={characters.id}
            key={characters.id}
            image={characters.image}
        />
      ))}
      <Footer />
    </Wrapper>
    );
  }
}

export default App;
