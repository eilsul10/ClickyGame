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
    highScore: 0
};

  render() {
    return (
    <Wrapper>
      <NavBar>Bob's Burgers Clicky Game</NavBar>
      <Jumbotron></Jumbotron>
      {this.state.characters.map(characters => (
        <CharacterCard
            shuffleFriend={this.shuffleFriend}
            id={characters.id}
            key={characters.id}
            image={characters.image}
        />
      ))}
      <Footer></Footer>
    </Wrapper>
    );
  }
}

export default App;
