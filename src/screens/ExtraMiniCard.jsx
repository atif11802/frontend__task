import React from "react";
import "../styles/extraminicard.css";
import { FaRegUserCircle } from "react-icons/fa";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const ExtraMiniCard = ({ item, count }) => {
	console.log(item);
	return (
		<div className='extraMiniCard'>
			<div className='extraMiniCard__left'>
				<p>{count + 1}</p>
			</div>
			<div className='extraMinicard__image'>
				<FaRegUserCircle size={35} />
			</div>
			<div className='extraMinicard__mid'>
				<h1>{item.name}</h1>
				<p>
					<CgArrowsExchangeAltV />
					{item.price}
				</p>
			</div>
			<div className='extraMinicard__percentage'>
				<p>{item.percentage}</p>
			</div>
		</div>
	);
};

export default ExtraMiniCard;
