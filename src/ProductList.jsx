import React from "react";
import Product from "./Product";


function ProductList({ products }) {
  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-md space-y-3  mx-auto">
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