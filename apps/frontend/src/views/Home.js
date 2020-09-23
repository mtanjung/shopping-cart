
import React, { useEffect, useState } from 'react';
import API from '../api/api';
import Item from '../components/Item';
import { Segment, Container } from 'semantic-ui-react'
import Cart from '../views/Cart';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('products').then((data) => {
      console.log('Fetching products');
      const products = data.data;
      setProducts(products);
    }, (error) => {
      console.log(error);
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Segment>
          <h2>Products: </h2>
          <div className='home' style={{ display: 'flex', 'flexWrap': 'wrap' }}>
            {products.map((product, index) => (
              <Item
                key={index}
                id={product.id}
                title={product.title}
                summary={product.summary}
                price={product.price}
              />
            ))}
          </div>
        </Segment>
      </Container>
      <div>
        <Cart />
      </div>
    </React.Fragment>
  );
}

export default Home;