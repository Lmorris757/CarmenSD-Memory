import React, { Component } from 'react';
// import './index.css';
import Header from "./components/Header";
// import Main from "./components/Main";
import FriendCard from "./components/FriendCard";
import Friends from "./friends.json";
import Main from './components/Main';



class App extends Component {
  state = {
    friends: Friends,
    score: 0,
    topscore: 0,
    shake: false,
    gameover: ""
  }

  updateTopScore = score => {
    this.state.topscore < score ? this.setState({ topscore: score }) : this.setState({ topscore: this.state.topscore })
  };
  updateScore = id => {
    // filter the array friends to display only the index with id of id
    const filtered = this.state.friends.filter(data => data.id === id);
    // checks if the filtered var has any index in it 
    if (filtered.length > 0) {
      //checks if the filtered index has the value clicked set to true
      if (filtered[0].clicked) {
        //if yes the game over
        this.shakePicture();
        this.setState({ gameover: "Game Over!" });
        this.updateTopScore(this.state.score);
        this.newGame();
      } else {
        //if not , set that index .clicked to true 
        filtered[0].clicked = true;
        // update the score 
        this.setState({ score: this.state.score + 1 });
        // shuffle the images
        this.randomizeBoard();
      }
    }
  }
  shakePicture() {
    this.setState({ shake: !this.state.shake });
    console.log("shake activated");

  }
  newGame() {
    let friends = this.state.friends.map(friends => {

      friends.clicked = false
      return friends;
    })


    this.setState({
      score: 0,
      friends,
      gameover: ""


    })

    this.shakePicture();

  }
  randomizeBoard = (id) => {
    // initialize the var 
    let sourceArray = this.state.friends
    // loop the array and randomizes its indexes
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));
      // creates a temp var to hold the index 
      var temp = sourceArray[j];
      //set the array index j with the value of the old array
      sourceArray[j] = sourceArray[i];
      //then sets the original index position to the temp value 
      sourceArray[i] = temp;
    }
    // update the object array with its new order
    this.setState({ friends: sourceArray });





  }
  render() {
    return (
      <div className="container-fluid">
        <nav>
          score={this.state.score}
          topscore={this.state.topscore}
        </nav>
        <Header />
        <div>
          <Main>

            {this.state.friends.map((friends, index) => {

              return (
                <FriendCard
                  key={index}
                  id={friends.id}
                  name={friends.name}
                  image={friends.image}
                  updateScore={this.updateScore}
                  shake={this.state.shake}
                />

              );
            })};

      </Main>
        </div>
      </div>
    );
  }
}

export default App;
