import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Header from "./components/Header";
// import JumboT from "./components/JumboT";
import Main from "./components/Main";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    topScore: 0,
    shake: false,
    gameOver: ""
  };

  shuffleCards = id => {
    let sourceArray = this.state.friends
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - 1));

      var x = sourceArray[j];

      sourceArray[j] = sourceArray[i];

      sourceArray[i] = x;
    }

    this.setState({ friends: sourceArray });

  };


  updateTopScore = score => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    this.state.topScore < score ? this.setState({ topScore: score }) : this.setState({ topScore: this.state.topScore })
    // Set this.topScore equal to thetopScore array
  };

  updateScore = id => {
    const filter = this.state.friends.filter(data => data.id);

    if (filter.friends > 0) {
      //checks if the filtered index has the value clicked set to true
      if (filter[0].clicked) {
        //if yes the game over
        this.shakePicture();
        this.setState({ gameover: "Game Over!" });
        this.updateTopScore(this.state.score);
        this.newGame();
      } else {
        //if not , set that index .clicked to true 
        filter[0].clicked = true;
        // update the score 
        this.setState({ score: this.state.score + 1 });
        // shuffle the images
        this.shuffleCards();
      }
    }
  }
  shakePicture() {
    this.setState({ shake: !this.state.shake });
    console.log("shake activated");

  }
  newGame() {
    let friends = this.state.friends.map(data => {

      data.clicked = false
      return data;
    })


    this.setState({
      score: 0,
      friends,
      gameover: ""


    })

  

    this.shakePicture();



  }



  // console.log(this.state.friends);
  // console.log("help");








  render(){
  return(
      <div className = "container-fluid" >
      <nav>
        <p>Score: {this.state.score}</p>
        <p>Top Score: {this.state.topScore}</p>
      </nav>

      <Header />

      <Main>

        {console.log(this.state.friends)}

        {this.state.friends.map((friend, index) => {
          return (
            <FriendCard

              id={friend.id}
              key={friend.id}
              // name={friend.name}
              image={friend.image}
              updateScore={this.updateScore}
            // location={friends.location}
            />
          )
        })}
      </Main>
        </div>
        
  );

        
        
        
        
      }       
        
};

export default App;
