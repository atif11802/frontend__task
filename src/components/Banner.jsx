import React from "react";
import "../styles/Banner.css";
import lrgImg from "../images/Group 108.png";
import smallImg from "../images/Group 83.png";

const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner__left'>
				<h1 className='banner__left__title'>
					discover,and collect digital Art NFTS
				</h1>
				<p className='banner__left__para'>
					digtal marketplace for crypto collectibles and non-fungible
					tokens(NFTs) buy sell and discover exclusive digital assests.
				</p>
				<div className='banner__left__button'>Explore Now</div>
				<div className='banner__left__info'>
					<div className='banner__left__info__item'>
						<span className='banner__left__info__item__span'>98</span>k+
						<div className='banner__left__info__item__para'>artwork</div>
					</div>
					<div className='banner__left__info__item'>
						<span className='banner__left__info__item__span'>12</span>k+
						<div className='banner__left__info__item__para'>auction</div>
					</div>
					<div className='banner__left__info__item'>
						<span className='banner__left__info__item__span'>15</span>k+
						<div className='banner__left__info__item__para'>artist</div>
					</div>
				</div>
			</div>
			<div className='banner__right'>
				<div className='banner__right__img'>
					<img src={lrgImg} alt='lrgImg' className='banner__right__img__lrg' />
					<img
						src={smallImg}
						alt='smallImg'
						className='banner__right__img__small'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
