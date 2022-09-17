import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';


function Navbar({ productCount }) {
	return (
		<div className="py-4 bg-white">

			<div className="max-w-6xl flex justify-between mx-auto items-center">
				<div className="flex ">
					<div className="text-3xl font-semibold">
						Let's	<span className="italic text-rose-600 font-bold text-5xl">	SHOP	</span>
					</div>
					<img
						className="w-14 h-12 pl-2"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmW87xS4z9Kfyj28FBfvCL5CPg66b09WwykQ&usqp=CAU"
					/>
				</div>

				<div className="flex flex-col items-center">
					<Link to="cartpage">
						< HiOutlineShoppingBag className="text-5xl text-primary-default" />
						<span className="-m-7">{productCount}</span>
					</Link>
				</div>

			</div>
		</div >

	);
}

export default Navbar;
