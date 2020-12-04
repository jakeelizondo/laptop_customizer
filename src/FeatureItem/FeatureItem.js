import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

function FeatureItem(props) {
  return (
    <div className="feature__item">
      <input
        type="radio"
        id={props.id}
        className="feature__option"
        name={slugify(props.feature)}
        checked={props.item.name === props.selected[props.feature].name}
        onChange={(e) => props.updateFeature(props.feature, props.item)}
      />
      <label htmlFor={props.id} className="feature__label">
        {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}

export default FeatureItem;
