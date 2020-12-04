import React from 'react';

function OptionItem(props) {
  return (
    <div className="summary__option">
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.selectedOptionName}</div>
      <div className="summary__option__cost">{props.cost}</div>
    </div>
  );
}

export default OptionItem;
