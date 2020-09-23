import React, { useState, useContext } from "react";
import { Card, Icon, Image, Button, Dropdown } from 'semantic-ui-react'
import { CartContext } from "../context";
import QuantityButton from "./buttons/QuantityButton"

const Item = (product) => {

  const { addToCart } = useContext(CartContext);
  //const { quantity, setQuantity } = useState();
  //const [quantity, setQuantity] = useState(...);
  const [quantity, setQuantity] = useState(0);

  //function handleChangeQuantity(value) {
  //  setQuantity(value);
  //}

  return (
    <Card raised style={{ margin: '10px' }}>
      <Card.Content>
        <Image src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' size='large' wrapped ui={false} />
        <Card.Header>{product.title}</Card.Header>
        <Card.Description>
          {product.summary}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <QuantityButton 
          value={quantity} 
          onChange={setQuantity}
        />
        <div>Price: ${product.price}</div>
        <Button color='blue'
          onClick={() => addToCart( {id: product.id, title: product.title, quantity: quantity, price: product.price} )}
        >
          Add to Cart
      </Button>
      </Card.Content>
    </Card>
  )
};

export default Item