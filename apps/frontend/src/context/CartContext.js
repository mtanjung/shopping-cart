import React, { createContext, useState, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import API from '../api/api';

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    cart: initialcart,
    summary: initialsummary,
    children
  } = props;

  // Use State to keep the values
  const [cart, setCart] = useState(initialcart);
  const isFirstRun = useRef(true);

  useEffect(() => {
    // Update the document title using the browser API
    console.log('useEffect');
    console.log(cart);
    
    // On first run, pull cart data from backend
    if (isFirstRun.current) {
      console.log('First Run');
      console.log('Fetching cart data');

      getBackendCart();
      isFirstRun.current = false;
      return;
    }
    
    // subsequence runs, just post cart data
    updateBackendCart(cart);
  });

  // Calculate summary
  const summary = useMemo(
    () => {
      console.log('Calculate summary')
      let summary = {
        subtotal: 0,
        estimated_total: 0,
        tax: 5,
        shipping: 5
      }
      var item;
      for (item of cart) {
        summary.subtotal += item.quantity * item.price;
      }

      summary.estimated_total = summary.subtotal + (summary.subtotal * summary.tax/100) + summary.shipping;
      console.log(summary);

      return summary;
    },
    [cart]
  )

  const addToCart = item => {
    console.log('Add to cart!');
    console.log(item);
    console.log('Current cart');
    console.log(cart);

    // Check if the item already exist in the cart
    const cart_array_key = cart.findIndex(x => x.product_id == item.id);

    // Item already exist in cart, just update the quantity
    if (cart_array_key !== -1) {
      console.log('Item already exist in cart, update quantity');
      cart[cart_array_key].quantity += item.quantity;
      // Below does not work
      //setCart(cart);
      setCart(() => [...cart]);
    } else {
      console.log('Item does not exist in cart, adding...');
      const newItem = { product_id: item.id, product_title: item.title, quantity: item.quantity, price: item.price };
      setCart(cart.concat([newItem]));
    }
  };

  const deleteFromCart = item => {
    console.log('deleteFromCart!');
    console.log(item);
    console.log('What is in cart');
    console.log(cart);

    // Check if the item already exist in the cart
    const cart_array_key = cart.findIndex(x => x.product_id == item.id);

    // Item already exist in cart, just update the quantity
    if (cart_array_key !== -1) {
      console.log('Item found in cart, deleting...');
      cart[cart_array_key].quantity += item.quantity;
      cart.splice(cart_array_key, 1);
      //setCart(cart);
      setCart(() => [...cart]);
    }
  };

  const updateCart = item => {
    console.log('updateCart!');
    console.log(item);
    console.log('What is in cart');
    console.log(cart);

    // Check if the item already exist in the cart
    const cart_array_key = cart.findIndex(x => x.product_id == item.id);

    // Item already exist in cart, just update the quantity
    if (cart_array_key !== -1) {
      console.log('Item already exist in cart, update quantity');
      cart[cart_array_key].quantity = item.quantity;
      //setCart(cart);
      setCart(() => [...cart]);
    }
  };

  const getBackendCart = () => {
    console.log('getBackendCart');
    
    API.get('carts').then((data) => {
      console.log('Card data from backend');
      const cart = data.data;
      console.log(cart);
      if (cart.length > 0) {
        setCart(cart);
      }
    }, (error) => {
      console.log(error);
    });
  };

  const updateBackendCart = cart => {
    console.log('updateBackendCart');
    console.log(cart);
    console.log('updateBackendCart done');

    API.post('carts', cart).then((cart) => {
    }, (error) => {
      console.log(error);
    });
  };

  // Make the context object:
  const cartContext = {
    cart,
    setCart,
    addToCart,
    updateCart,
    deleteFromCart,
    summary
  };

  // pass the value in provider and return
  return <Context.Provider value={cartContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  cart: PropTypes.array,
  summary: PropTypes.object
};

Provider.defaultProps = {
  cart: [],
  summary: []
};