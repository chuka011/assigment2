import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text too short'
  if(props.len > 5) {
    validationMessage = 'Text just enough'
  }
    return (
      <div>
        <p>{validationMessage}</p>
      </div>
    );
}

export default validation;
