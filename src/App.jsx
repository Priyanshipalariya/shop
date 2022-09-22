import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductListPage from './ProductListPage';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Footer from './Footer';
import NotFound from './NotFound';
import CartPage from './CartPage';

function App() {
	const savedDataString = localStorage.getItem('my-cart') || '{}'
	const savedData = JSON.parse(savedDataString);
	const [cart, setCart] = useState(savedData);

	function handleAddToCart(productId, count) {
		let oldCount = cart[productId] || 0;
		const newCart = { ...cart, [productId]: oldCount + count };
		setCart(newCart);
		const cartString = JSON.stringify(newCart);
		localStorage.setItem('my-cart', cartString);
	}

	const totalCount = Object.keys(cart).reduce(function(previous, current) {
		return previous + cart[current];
	}, 0);


	return (
		<div className="bg-gray-200 h-screen overflow-scroll flex flex-col">
			<Navbar productCount={totalCount} />

			<div className="grow">
				<Routes>
					<Route path="/cartpage/" element={<CartPage/> }/>
					<Route path="/" element={<ProductListPage />} />
					<Route
						path="/product/:id"
						element={<ProductDetails onAddToCart={handleAddToCart} />}
					/>
					<Route path="*" element={<NotFound />} />
				
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
