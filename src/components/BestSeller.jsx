import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItetm from './ProductItetm';
import Ttitle from './Ttitle';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Make sure the property name matches exactly what’s in your dataset
      const bestProducts = products.filter(item => item.BestSeller === true);
      setBestSeller(bestProducts.slice(0, 5));
    }
  }, [products]); // react when products changes

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Ttitle text1={'BEST'} text2={'SELLERS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItetm
            key={index}
            id={item._id}
            image={item.image} // ✅ fixed prop name
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
