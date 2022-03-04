import React from "react";
import "../styles/NftsCard.css";
import image1 from "../images/image1.png";
import image2 from "../images/image3.png";
import image3 from "../images/imag4.png";
import BigImage from "../images/image2.png";
import { FaUserCircle } from "react-icons/fa";

const NftsCard = () => {
	return (
		<div className='nftscard'>
			<div className='nftscard__container'>
				<div className='nftscard__largeImg'>
					<img src={BigImage} alt='bigimg' />
				</div>
				<div className='nftscard__smallImg'>
					<img src={image1} alt='image1' />
					<img src={image2} alt='image2' />
					<img src={image3} alt='image3' />
				</div>
			</div>
			<div className='nfts__content'>
				<h1>Amazing Collections</h1>
				<div className='nfts__content__items'>
					<div className='nfts__content__items__left'>
						<FaUserCircle size={30} />
						<p>By atif</p>
					</div>
					<div className='nfts__content__items__right'>
						<p>Total 54 Items</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NftsCard;
