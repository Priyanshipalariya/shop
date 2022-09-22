import React from "react";
import Product from "./Product";


function ProductList({ products }) {
  return (
    <div className=" flex flex-wrap gap-2 rounded-md space-y-3 md:space-y-0">
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