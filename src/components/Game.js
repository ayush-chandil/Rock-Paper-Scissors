import React, { Component } from 'react'
import './style.css';




const Winner = (first, second) => {
  if (first === second) {
    return "Tie"
  }

  switch (first) {
    case "Rock":
      if (second === "Paper")
        return second;
      else return first;

    case "Paper":
      if (second === "Scissors")
        return second;
      else return first;

    case "Scissors":
      if (second === "Rock")
        return second;
      else return first;
  }

}



class Game extends Component {


  state = {
    Started: false,
    Player: null,
    Computer: null
  };

  render() {
    const { Started, Player, Computer } = this.state;

    const Images = {
      Rock: "https://i.imgur.com/TONXH9s.png",
      Paper: "https://i.imgur.com/t2154qR.png",
      Scissors: "https://i.imgur.com/SXstPKk.png"
    };

    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        
        {Started ? (
          <div className="game">
            
            <div className="player1">
              {Player ? (<img src={Images[Player]} id="select"/>) : (
                <div className="choose">

                  {Object.keys(Images).map((a) => (
                    <span key={a} onClick={() => {
                      this.setState({
                        Player: a,
                        Computer: Object.keys(Images)[
                          Math.floor(Math.random() * Object.keys(Images).length)
                        ]
                      }
                      );
                      
                    }}>

                      <img src={Images[a]} alt={a} />
                     <div className="heading"> 
                      {a}
                      </div>
                    </span>
                  ))}
                </div>
              )}
            </div>



            <div className="player2">
                
              {Computer ? (<img src={Images[Computer]} />) : (
                <img src="https://i.imgur.com/CyvHqQH.png" />
              )}
            </div>

          </div>

        ) : (
          <img src="https://i.imgur.com/FrnyhhB.png" id="start" alt="Start" onClick={() => {
            this.setState({ Started: true });
          }} />
        )}

        {Player && Computer &&
          <p className="result">

            {(() => {
              const Win = Winner(Player, Computer);
              if (Win === "Tie") {
                return "Nobody Wins!";
              }
              else {
                if (Win === Player) {
                  return "Player Wins!";
                } else {
                  return "Computer Wins!";
                }
              }
            })()}



            <img id="restart" onClick={() => this.setState({
              Started: true,
              Player: null,
              Computer: null
            })} src="https://static.thenounproject.com/png/904768-200.png" /></p>}

           

      </div>


    )

  }

}

export default Game

