import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  HiArrowNarrowLeft,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi';
import { getProductData } from './api';
import Loading from './Loading';
import NotFound from './NotFound';

function ProductDetails({ onAddToCart }) {
  const id = +useParams().id;
  const [productDetail, setProductDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function() {
      const productInfo = getProductData(id);
      productInfo
        .then(function(product) {
          setProductDetail(product);
          setLoading(false);
        })
        .catch(function() {
          setLoading(false);
        });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
    setCount(1)
  }

  if (loading) {
    return <Loading />;
  }

  if (!productDetail) {
    return <NotFound />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/">
        <HiArrowNarrowLeft className="text-3xl mb-2" />
      </Link>

      
      <div className="flex pr-16 py-12 bg-white pl-5 mx-auto">
        <img className=" w-80 h-80" src={productDetail.thumbnail} />

        <div className="flex flex-col mx-10">
          <h3 className="text-sm">{productDetail.category}</h3>
          <h3 className="text-md pt-3 ">{productDetail.brand}</h3>

          <h1 className="text-4xl mb-5">{productDetail.title}</h1>

          <h3 className="text-3xl mb-5 font-medium">
            ${productDetail.price}
          </h3>

          <p className="mb-10"> {productDetail.description}</p>

          <div>
              <input value={count} min="1" onChange={handleCountChange}
                className=" border rounded-md px-2 py-2 w-12"
                type="number"/>
           
            <button onClick={handleButtonClick} className=" ml-4 py-2 px-5 rounded-md bg-primary-light">
              Add to Cart
						</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-3xl mt-2 ">
        <div>
          {id > 1 && (
            <Link to={"/product/" + (id - 1)}>
              <HiChevronLeft />Previous
						</Link>
          )}
        </div>
        <div>
          <Link to={"/product/" + (id + 1)}>
            <HiChevronRight />Next
					</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
