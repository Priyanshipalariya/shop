import React from "react";
import Product from "./Product";


function ProductList({ products }) {
  return (
    <div className=" gap-2 md:grid md:grid-cols-3 rounded-md space-y-3 md:space-y-0 mx-auto">
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