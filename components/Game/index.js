import React from "react";
import Board from "../Board";
import { Button, Fieldset, NumberField } from "react95";

// import "./style.css";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.boardElement = React.createRef();

    this.state = {
      height: 8,
      width: 8,
      mines: 10,
      gameStatus: 0,
    };
  }

  handleChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  handleChangeHeight = (event) => {
    console.log(event);
    const val = clamp(event, 5, 18);
    this.handleChange("height", val);
  };

  handleChangeWidth = (event) => {
    const val = clamp(event, 5, 18);
    this.handleChange("width", val);
  };

  handleChangeMines = (event) => {
    const cap = Math.floor((this.state.height * this.state.width) / 3);
    const val = clamp(event, 1, cap);
    this.handleChange("mines", val);
  };

  restartGame = () => {
    this.boardElement.current.restartBoard();
  };

  render() {
    const { height, width, mines, gameStatus } = this.state;
    return (
      <div className="game">
        <Fieldset
          label="Minesweeper 💣"
          className="flex flex-col justify-around items-center"
        >
          <div className="flex flex-col gap-5 my-1">
            <Button onClick={this.restartGame}>Play</Button>

            <div className="control-buttons">
              <form className=" flex flex-col gap-3">
                <div className="flex justify-between gap-5">
                  <label>Height</label>
                  <NumberField
                    value={this.state.height}
                    onChange={this.handleChangeHeight}
                    defaultValue={this.state.height}
                    width={130}
                  />
                </div>
                <div className="flex justify-between gap-5">
                  <label>Width</label>
                  <NumberField
                    value={this.state.width}
                    onChange={this.handleChangeWidth}
                    defaultValue={this.state.width}
                    width={130}
                  />
                </div>
                <div className="flex justify-between gap-5">
                  <label>Mines</label>
                  <NumberField
                    value={this.state.mines}
                    onChange={this.handleChangeMines}
                    defaultValue={this.state.mines}
                    width={130}
                  />
                </div>
              </form>
            </div>
          </div>
          <Board
            ref={this.boardElement}
            height={height}
            width={width}
            mines={mines}
            gameStatus={gameStatus}
          />
        </Fieldset>
      </div>
    );
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}

export default Game;
