import React from 'react';
import Square from './square.jsx';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.rows = [1,2,3,4,5,6,7,8];
    this.state.boxStyle = {
      width: '12.5%'
    };
    this.state.blackColor = '#019875';
    this.state.whiteColor = '#ecf0f1';
    this.state.boardStyle = {
      width: '400px',
      height: '400px'
    };
  }

  render() {
    var rows = this.state.rows.map((x)=>{
      var values = [1,2,3,4,5,6,7,8];
      var squares = values.map((y)=>{
        var style = Object.assign({}, this.state.boxStyle);
        if((x+y)%2 == 0){
          style.backgroundColor = this.state.blackColor;
        } else {
          style.backgroundColor = this.state.whiteColor;
        }
        return Square(true, (x==y)?'blackQueen':'whitePawn', y, style);
      });
      return (
        <tr key={x} className="row">
          {squares}
        </tr>
      );
    });

    return (
      <table className="board" style={this.state.boardStyle}>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
