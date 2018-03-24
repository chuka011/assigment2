import React from 'react';

const char = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    texAlign: "center",
    margin: "16px",
    border: "1px solid red"}

    return (
      <div style = {style} onClick={props.click}>{props.ch}</div>
    )
}

export default char;
