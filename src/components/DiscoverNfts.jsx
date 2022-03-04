import React from "react";
import "../styles/DiscoverNfts.css";
import { IoFilter } from "react-icons/io5";
import DiscoverCard from "../screens/DiscoverCard";

const DiscoverNfts = () => {
	return (
		<div className='discovernfts'>
			<h1>Discover More NFTS</h1>
			<div className='discovernfts__filter'>
				<div className='discovernfts__filter__left'>
					<ul>
						<li>All categories</li>
						<li>Art</li>
						<li>celebrities</li>
						<li>gaming</li>
						<li>sport</li>
						<li>Music</li>
						<li>crypto</li>
					</ul>
				</div>
				<div className='discovernfts__filter__right'>
					<IoFilter />
					<p>All filters</p>
				</div>
			</div>
			<div className='discovernfts__cards'>
				{[...Array(16)].map((_, i) => (
					<div className='child' key={i}>
						<DiscoverCard />
					</div>
				))}
			</div>
			<div className='discover__nfts__button'>
				<button>More Nfts</button>
			</div>
		</div>
	);
};

export default DiscoverNfts;
