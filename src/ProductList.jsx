import React from "react";
import Product from "./Product";


function ProductList({ products }) {
  return (
    <div className=" lg:grid lg:grid-cols-3 gap-2 rounded-md space-y-3 md:space-y-0 mx-auto">
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