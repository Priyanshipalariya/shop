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

      
      <div className="flex flex-col md:flex-row px-12 py-8 bg-white justify-center items-center md:justify-start mx-auto">
        <img className=" w-100 h-80" src={productDetail.thumbnail} />


<div className="flex flex-col ">
        <div className="flex flex-col mx-8 md:mx-10 border-b-2 border-gray-300 pb-4">
          <h3 className="text-md pt-3 text-gray-500 ">{productDetail.brand}</h3>

          <h1 className="text-2xl mb-2 font-semibold">{productDetail.title}</h1>

          <h3 className="text-xl mb-3 font-bold">
            ${productDetail.price}
          </h3>

          <p className="mb-4 text-sm text-gray-800"> {productDetail.description}</p>

          <div className="flex">
              <input value={count} min="1" onChange={handleCountChange}
                className=" border rounded-md  w-12 border-solid border-gray-300"
                type="number"/>
           
            <button onClick={handleButtonClick} className=" ml-4 py-1 px-12 rounded-md bg-primary-default">
              Add to Cart
						</button>
          </div>
          </div>
          <h3 className="text-sm pb-4 mx-8 md:mx-10">Category : <span className="text-primary-default">{productDetail.category}</span></h3>
         
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
