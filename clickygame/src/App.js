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
      <Title>Bob's Burgers Clicky Game</Title>
      {this.state.characters.map(*** => (
        <CharacterCard
            shuffleFriend={this.shuffleFriend}
            id={***.id}
            key={***.id}
            image={***.image}
        />
      ))}
    </Wrapper>
    );
  }
}

export default App;
