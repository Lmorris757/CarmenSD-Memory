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

  updateTopScore = score => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    this.state.topScore < score ? this.setState({ topScore: score }) : this.setState({ topScore: this.state.topScore })
    // Set this.topScore equal to thetopScore array
  };

  updateScore = id => {
    console.log("help");
    this.setState({
      score: this.state.score + 1
    });
    // const filter = this.state.friends.filter(data => data.id === id);
    // if (filter.length > 0){
    //   if (filter[0].clicked){
    //     this.setState({ gameOver: "You Lose! GAAAME OVER!"});
    //     this.updateScore(this.state.score);
    //     this.newRound();
    //   }
    //   else {
    //     filter[0].clicked = true;

    //     this.setState({ score: this.state.score + 1});

    //     this.shuffleCards(id);
    //   }

    // }
  }

  shuffleCards = (id) => {
    let sourceArray = this.state.friends
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - 1));

      var x = sourceArray[j];

      sourceArray[j] = sourceArray[i];

      sourceArray[i] = x;
    }

    this.setState({ friends: sourceArray });
  }

  render() {
    return (

      <div className="container-fluid">
        {/* <nav
        score={this.state.score}
        topScore={this.state.topScore}
      /> */}
        <nav>
          <p>Score: {this.state.score}</p>
          <p>Top Score: {this.state.topScore}</p>
        </nav>

        <Header />

        <Main>

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
}

export default App;
