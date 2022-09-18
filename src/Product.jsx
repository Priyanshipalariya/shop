import React from 'react';
import { Link } from 'react-router-dom';

function Product({ thumbnail, category, title, price, id, rating }) {
	return (
		<div className="max-w-xs border-b-4 p-4">
			<div className="w-full aspect-square">
				<img
					className="w-full h-full object-cover rounded-md"
					src={thumbnail}
				/>
			</div>

			<div className="text-gray-400 text-xs"> {category}</div>

			<div className="text-md font-bold "> {title}</div>
			<div className="text-xs text-primary-light">{rating}</div>

			<div className="font-bold text-sm ">${price}</div>

			<Link to={'/product/' + id} className="bg-primary-default px-2 rounded-md" >
				View Details
			</Link>
		</div>
	);
}

export default Product;
