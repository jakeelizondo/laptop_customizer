import React from 'react';
import OptionItem from '../OptionItem/OptionItem';
import Total from '../Total/Total';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function Cart(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <OptionItem
        key={featureHash}
        feature={feature}
        selectedOptionName={selectedOption.name}
        cost={USCurrencyFormat.format(selectedOption.cost)}
      />
    );
  });
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Total cost={USCurrencyFormat.format(props.total)} />
    </section>
  );
}

export default Cart;
