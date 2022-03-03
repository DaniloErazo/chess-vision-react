import React from 'react';
import ReactDOM from 'react-dom'
let start = false;

function Square(props) {

  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function BtnStart(){
  return (
    <button className="btnStart"  >
      Comenzar
    </button>
  );
}

function startGame(){
  this.start = true;
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
          {this.renderSquare("A8")}
          {this.renderSquare("B8")}
          {this.renderSquare("C8")}
          {this.renderSquare("D8")}
          {this.renderSquare("E8")}
          {this.renderSquare("F8")}
          {this.renderSquare("G8")}
          {this.renderSquare("H8")}
        </div>
        <div className="board-row">
          {this.renderSquare('A7')}
          {this.renderSquare('B7')}
          {this.renderSquare('C7')}
          {this.renderSquare('D7')}
          {this.renderSquare('E7')}
          {this.renderSquare('F7')}
          {this.renderSquare('G7')}
          {this.renderSquare('H7')}
        </div>
        <div className="board-row">
          {this.renderSquare('A6')}
          {this.renderSquare('B6')}
          {this.renderSquare('C6')}
          {this.renderSquare('D6')}
          {this.renderSquare('E6')}
          {this.renderSquare('F6')}
          {this.renderSquare('G6')}
          {this.renderSquare('H6')}
        </div>
        <div className="board-row">
          {this.renderSquare('A5')}
          {this.renderSquare('B5')}
          {this.renderSquare('C5')}
          {this.renderSquare('D5')}
          {this.renderSquare('E5')}
          {this.renderSquare('F5')}
          {this.renderSquare('G5')}
          {this.renderSquare('H5')}
        </div>
        <div className="board-row">
          {this.renderSquare('A4')}
          {this.renderSquare('B4')}
          {this.renderSquare('C4')}
          {this.renderSquare('D4')}
          {this.renderSquare('E4')}
          {this.renderSquare('F4')}
          {this.renderSquare('G4')}
          {this.renderSquare('H4')}
        </div>
        <div className="board-row">
          {this.renderSquare('A3')}
          {this.renderSquare('B3')}
          {this.renderSquare('C3')}
          {this.renderSquare('D3')}
          {this.renderSquare('E3')}
          {this.renderSquare('F3')}
          {this.renderSquare('G3')}
          {this.renderSquare('H3')}
        </div>
        <div className="board-row">
          {this.renderSquare('A2')}
          {this.renderSquare('B2')}
          {this.renderSquare('C2')}
          {this.renderSquare('D2')}
          {this.renderSquare('E2')}
          {this.renderSquare('F2')}
          {this.renderSquare('G2')}
          {this.renderSquare('H2')}
        </div> 
        <div className="board-row">
          {this.renderSquare("A1")}
          {this.renderSquare("B1")}
          {this.renderSquare("C1")}
          {this.renderSquare("D1")}
          {this.renderSquare("E1")}
          {this.renderSquare("F1")}
          {this.renderSquare("G1")}
          {this.renderSquare("H1")}
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
    //console.log(Math.floor(randomnum));
    //console.log(String.fromCharCode(Math.floor(randomnum)+65)+Math.floor(randomnum));
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
    
    });

    

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



function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


//****/
//****************************** */
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 6};
  }

  tick() {
    if(this.state.seconds != 0){
      this.setState(state => ({
        seconds: state.seconds - 1
      }));
    }else{
      this.componentWillUnmount();
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('timer')
);

ReactDOM.render(
  BtnStart(),
  document.getElementById('btnStart')
)