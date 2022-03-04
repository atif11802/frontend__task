import React from "react";
import "../styles/Display.css";
import BigImage from "../images/image2.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import Minicard from "../screens/Minicard";
import image1 from "../images/image1.png";
import image2 from "../images/image3.png";
import image3 from "../images/imag4.png";
import ExtraMiniCard from "../screens/ExtraMiniCard";

const Display = () => {
	const array = [
		{
			image: image1,
		},
		{
			image: image2,
		},
		{
			image: image3,
		},
	];

	const fakeData = [
		{
			name: "cryptoFunks",
			price: "19,799,399",
			percentage: "+26.52%",
		},
		{
			name: "Cryptix",
			price: "2,789.99",
			percentage: "+10.52%",
		},
		{
			name: "Frensware",
			price: "9,232.39",
			percentage: "+2.52%",
		},
		{
			name: "PunkArt",
			price: "3,769.3",
			percentage: "+1.52%",
		},
		{
			name: "Art cryto",
			price: "10,789.39",
			percentage: "+2.52%",
		},
	];

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
				{array.map((item, index) => {
					return <Minicard item={item} key={index} />;
				})}
				{/* <Minicard />
				<Minicard />
				<Minicard /> */}
			</div>
			<div className='display__right'>
				<div className='display__right__text'>
					<h1>Top Collectons over</h1>
					<p>Last 7 Days</p>
				</div>
				{fakeData.map((item, index) => (
					<ExtraMiniCard item={item} key={index} count={index} />
				))}
			</div>
		</div>
	);
};

export default Display;
