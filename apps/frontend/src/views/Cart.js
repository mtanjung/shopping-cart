import React, { useContext } from "react";
import { Container, Segment, List, Button, Image, Divider } from 'semantic-ui-react'
import { CartContext } from "../context";
import QuantityButton from "../components/buttons/QuantityButton"

const Cart = props => {
  const { cart, updateCart, deleteFromCart, summary } = useContext(CartContext);

  function handleQuantityChange(new_quantity, item) {
    console.log('handleQuantityChange');
    console.log(new_quantity, item);
    updateCart({ id: item.product_id, title: item.product_title, quantity: new_quantity });
  }

  return (
    <Container>
      <Segment>
        <h2>Shopping Cart:</h2>
        {cart.length === 0 ? (
          <h4>Your cart is empty</h4>
        ) : (
            <React.Fragment>
              <List divided verticalAlign='middle'>
                {cart.map((item, index) => {
                  return (
                    <List.Item key={index}>
                      <List.Content floated='right'>
                        <Button
                          onClick={() => deleteFromCart({ id: item.product_id })}>
                          Remove
                        </Button>
                      </List.Content>
                      <List.Content floated='right'>Price: {item.price}</List.Content>
                      <List.Content floated='right'>Quantity:
                        <QuantityButton
                          value={item.quantity}
                          item={item}
                          onChange={handleQuantityChange}
                        />
                      </List.Content>
                      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                      <List.Content>{item.product_title}</List.Content>
                    </List.Item>
                  );
                })}
              </List>
              <Divider />
              <h4>Summary</h4>
              <List divided verticalAlign='middle'>
                <List.Item>
                  <List.Content>Subtotal</List.Content>
                  <List.Content floated='right'>${summary.subtotal}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='left'>Shipping</List.Content>
                  <List.Content floated='right'>${summary.shipping}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='left'>Tax</List.Content>
                  <List.Content floated='right'>{summary.tax}%</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='left'>Estimated Total</List.Content>
                  <List.Content floated='right'>${summary.estimated_total}</List.Content>
                </List.Item>
                <Divider />
                <Button disabled>Checkout</Button>
              </List>
            </React.Fragment>
          )}
      </Segment>
    </Container>
  );
};

export default Cart;
