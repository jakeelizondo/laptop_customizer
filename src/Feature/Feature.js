import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

function Feature(props) {
  // console.log(props);
  const options = props.FEATURES[props.feature].map((item) => {
    const itemHash = slugify(JSON.stringify(item));

    // feature item
    return (
      <FeatureItem
        updateFeature={props.updateFeature}
        key={itemHash}
        id={itemHash}
        USCurrencyFormat={props.USCurrencyFormat}
        feature={props.feature}
        item={item}
        selected={props.selected}
      />
    );
  });

  return <div>{options}</div>;
}

export default Feature;
