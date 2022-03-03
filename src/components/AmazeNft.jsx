import React from "react";
import "../styles/AmazeNft.css";
import { FaCreditCard } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const AmazeNft = () => {
	return (
		<div className='amaze'>
			<div className='amaze__left'>
				<h1>the amazing NFT Art of the world here!</h1>
			</div>
			<div className='amaze__mid'>
				<div className='amaze__mid__icon'>
					<FaCreditCard />
				</div>
				<div className='amaze__mid__text'>
					<h1>Fast transaction</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
						neque! Consequuntur itaque unde quidem libero! Error saepe magni,
					</p>
				</div>
			</div>
			<div className='amaze__right'>
				<div className='amaze__right__icon'>
					<GiProgression />
				</div>
				<div className='amaze__right__text'>
					<h1>Fast transaction</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
						neque! Consequuntur itaque unde quidem libero! Error saepe magni,
					</p>
				</div>
			</div>
		</div>
	);
};

export default AmazeNft;
