import React from 'react';

export default function(isWhite, piece, key, style) {
  var classes = 'black-square';
  if(isWhite) {
    classes = 'white-square';
  }
  var link = '';
  if(piece != ''){
    link = '../imgs/pieces/fancy/' + piece + '.svg';
  } else {
    link = '../imgs/pieces/blank.svg';
  }
  var imageStyle = {
    width: '100%',
    height: '100%'
  };
  return (
    <td key={key} className={classes} style={style}>
      <img src={link} alt="" style={imageStyle}/>
    </td>
  );
};
