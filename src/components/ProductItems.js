import React from "react";
import { useParams } from "react-router-dom";
import Shoes from  './../Shoes.json'


function ProductItems() {

  const { id } = useParams();
  const shoe = Shoes[id];
  console.log(shoe);

  if(!shoe)
    return <h2>Product Not Found</h2>
  

  

  return (
    <div>
      <h1>ProductItems Js</h1>
      <div  className="link">
              <h4>{shoe.name}</h4>
              <img src={shoe.img} height={500} alt="shoe" />
            </div>
    </div>
  );
}

export default ProductItems;
