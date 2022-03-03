import React from "react";
import "../styles/minicard.css";
import image1 from "../images/image1.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";

const Minicard = () => {
	return (
		<div className='minicard'>
			<div className='minicard__img'>
				<img src={image1} alt='image1' className='minicard__img__image' />
			</div>
			<div className='minicard__text'>
				<h1>the Futr Abstr</h1>
				<div className='minicard__text__items'>
					<div className='minicard__text__items__image'>
						<IoPersonCircleOutline size={25} />
					</div>
					<div className='minicard__text__items__statics'>
						<RiArrowUpDownLine color={"#98FB98"} />
						<p>0.5 ETH</p>
					</div>
					<div className='minicard__text__items__statics__para'>1 of 8</div>
				</div>
				<div className='minicard__button'>place a Bid</div>
			</div>
		</div>
	);
};

export default Minicard;
