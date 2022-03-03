import React from 'react';
import ReactDOM from 'react-dom'

function Square(props) {

  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    
    return (
      <div>
        <div className="board-row">
          {this.renderSquare("A1")}
          {this.renderSquare("A2")}
          {this.renderSquare("A3")}
          {this.renderSquare("A4")}
          {this.renderSquare("A5")}
          {this.renderSquare("A6")}
          {this.renderSquare("A7")}
          {this.renderSquare("A8")}
        </div>
        <div className="board-row">
          {this.renderSquare("B1")}
          {this.renderSquare("B2")}
          {this.renderSquare("B3")}
          {this.renderSquare("B4")}
          {this.renderSquare("B5")}
          {this.renderSquare("B6")}
          {this.renderSquare("B7")}
          {this.renderSquare("B8")}
        </div>
        <div className="board-row">
          {this.renderSquare('C1')}
          {this.renderSquare('C2')}
          {this.renderSquare('C3')}
          {this.renderSquare('C4')}
          {this.renderSquare('C5')}
          {this.renderSquare('C6')}
          {this.renderSquare('C7')}
          {this.renderSquare('C8')}
        </div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };

    
  }

  handleClick(i) {
    console.log(i);
    let randomnum = getRandomArbitrary(1,8);
    let ranLetter = getRandomArbitrary(1,8);
    console.log(Math.floor(randomnum));
    console.log(String.fromCharCode(Math.floor(randomnum)+65)+Math.floor(randomnum));
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));