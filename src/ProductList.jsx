import React from "react";
import Product from "./Product";


function ProductList({ products }) {
  return (
    <div className=" flex flex-wrap justify-center">
      {products.map(function(item) {
        return (
          <Product
            key={item.id}
            {...item} />
        );
      })}
    </div>
  );
}

export default ProductList;