import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Ttitle from "./Ttitle";
import ProductItetm from "./ProductItetm";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts , setLatesetProducts] = useState([]);

  useEffect(()=>{
    setLatesetProducts(products.slice(0,10));
  },[])
  return (
  <div className="my-10">
      <div className="text-center py-8 text-3xl">
          <Ttitle text1={"LATEST"} text2={'COLLECTIONS'}/>
          <p className="w-3/4 m-auto text-xs sm:text-sm  mdtex:base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing ans typesetting industry. Lorem Ipsum has been the.
          </p>

      </div>

      {/* rendering products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-4 gap-6">
        {
          latestProducts.map((item,index)=>(
            <ProductItetm 
            key={index} 
            id={item._id} 
            image={item.image}
            name={item.name} 
            price={item.price}/>
          ))
        }
      </div>
  </div>);
};

export default LatestCollection;
