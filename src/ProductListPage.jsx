import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Unavailable from './Unavailable';
import { getProductList } from './api';
import Loading from './Loading';

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState('default');
  const [loading, setLoading] = useState(true)

  useEffect(function() {
    const productsData = getProductList();
    productsData.then(function(products) {
      setLoading(false)
      setProductList(products);
    });
  }, []);

  let data = productList.filter(function(item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseKeyword = keyword.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseKeyword) != -1;
  });

  if (sort == 'price.l') {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  } else if (sort == 'price.h') {
    data.sort(function(x, y) {
      return y.price - x.price;
    });
  } else if (sort == 'title') {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handleQueryChange(event) {
    setKeyword(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />;
  }

  return (

    <div className=" max-w-6xl mx-auto px-9 py-12.5 bg-white my-16">
     
     <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row  md:justify-between">
      <input
        className="border rounded-md border-black bg-stone-50 text-gray-500 "
        placeholder="Search here"
        onChange={handleQueryChange}
      />

      <select
        onChange={handleSortChange}
        value={sort}
        className="border rounded-md border-black bg-stone-50 text-gray-500  "
      >
        <option value="default">Default Sorting</option>
        <option value="title">Sort by Title</option>
        <option value="price.l">Sort by Price:low to high</option>
        <option value="price.h">Sort by Price:high to low</option>
      </select>
      </div>

      {data.length > 0 && <ProductList products={data} />}
      {data.length == 0 && <Unavailable />}
    </div>
  );
}

export default ProductListPage;
