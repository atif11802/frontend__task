import React from "react";
import "../styles/DiscoverCard.css";
import imageLrg from "../images/image 1.png";
import { CgArrowsExchangeV } from "react-icons/cg";

const DiscoverCard = () => {
	return (
		<div className='DiscoverCard'>
			<div className='DiscoverCard__image'>
				<img src={imageLrg} alt='imageLrg' />
			</div>
			<div className='discoverCard__images'>
				<div className='discoverCard__image'>
					<img
						src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
						alt='user'
					/>
				</div>
				<div className='discoverCard__image1'>
					<img
						src='https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
						alt='user'
					/>
				</div>
				<div className='discoverCard__image2'>
					<img
						src='https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
						alt='user'
					/>
				</div>
				<div className='discoverCard__image3'>
					<img
						src='https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
						alt='user'
					/>
				</div>
			</div>
			<div className='DiscoverCard__info'>
				<h1>ArtCrypto</h1>
				<div className='DiscoverCard__info__firstline'>
					<div className='DiscoverCard__info__firstline__left'>
						<CgArrowsExchangeV color={"green"} />
						<p>0.25 ETh</p>
					</div>
					<div className='DiscoverCard__info__firstline__right'>1 of 321</div>
				</div>
				<div className='DiscoverCard__info__secondline'>
					<div className='DiscoverCard__info__secondline__left'>
						<p> 3h 50m 2s left</p>
					</div>
					<div className='DiscoverCard__info__secondline__right'>
						<p>place a bid</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiscoverCard;
