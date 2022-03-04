import React from "react";
import "../styles/SellNfts.css";
import sell1 from "../images/sell1.png";
import sell2 from "../images/sell2.png";
import sell3 from "../images/sell3.png";
import { FaUserCircle } from "react-icons/fa";

const SellNfts = () => {
	return (
		<div className='sellnfts'>
			<div className='sellnfts__images'>
				<div className='sellnfts__images__img1'>
					<img src={sell3} alt='sell1' />
					<div className='sellnfts__images__img1__avatar'>
						<FaUserCircle size={30} />
					</div>
				</div>
				<div className='sellnfts__images__img2'>
					<img src={sell2} alt='sell2' />
					<div className='sellnfts__images__img2__avatar'>
						<FaUserCircle size={30} />
					</div>
				</div>
				<div className='sellnfts__images__img3'>
					<img src={sell1} alt='sell3' />
					<div className='sellnfts__images__img3__avatar'>
						<FaUserCircle size={30} />
					</div>
				</div>
			</div>
			<div className='sellnfts__texts'>
				<h1>Create and sell your nfts</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, in?
					Corrupti quos dolorum incidunt doloribus eius dolorem natus officiis
					veritatis dicta tenetur neque fugit illum repellendus, adipisci minima
					provident at.
				</p>
				<div className='sellnfts__texts__button'>
					<p>sign up now</p>
				</div>
			</div>
		</div>
	);
};

export default SellNfts;
