import React from "react";
import { Dropdown } from 'semantic-ui-react'

// Generate quantity array of objects
const quantity = Array.from({length: 10}, (_, i) => i + 1).map(i => {
    return { key: i, text: i, value: i };
})

const QuantityButton = ({value, onChange, item}) => {

  function handleChange(e, data) {
    console.log('QuantityButton handleChange');
    console.log(e);
    console.log(data);
    onChange(data.value, item);
  }

  return (
    <Dropdown
      placeholder='Select Quantity'
      selection
      options={quantity}
      value={value}
      onChange={handleChange}
    />
  )
};

export default QuantityButton