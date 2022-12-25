import React from 'react';
import Product from './Product';

const Home = () => {
  const arr = [1,2,3,4];
  return (
    <div>
      {
        arr.map(i=>(
          <Product value={1} key={1} />
        ))
      }
    </div>
  );
};

export default Home;
