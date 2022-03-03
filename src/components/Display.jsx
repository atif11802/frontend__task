import React from "react";
import "../styles/Display.css";
import BigImage from "../images/imag4.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import Minicard from "../screens/Minicard";

const Display = () => {
	return (
		<div className='display'>
			<div className='display__image'>
				<img src={BigImage} alt='bigimg' className='display__image__bigImage' />
				<div className='display__image__text'>
					<div className='display__image__text__left'>
						<div className='display__image__text__left__image'>
							<IoPersonCircleOutline size={38} />
						</div>
						<div className='display__image__text__left__text'>
							<h1>the Futr Abstr</h1>
							<p>10 in the stock</p>
						</div>
					</div>
					<div className='display__image__text__right'>
						<h1>Highest Bid</h1>
						<p>0.25 ETH</p>
					</div>
				</div>
			</div>
			<div className='display__middle'>
				<Minicard />
				<Minicard />
				<Minicard />
			</div>
			<div className='display__right'>right</div>
		</div>
	);
};

export default Display;
