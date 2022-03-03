import React from "react";
import "../styles/Menu.css";
import Logo from "../images/NFters.png";
import { IoSearchOutline } from "react-icons/io5";

const Menu = () => {
	return (
		<div className='menu'>
			<div className='menu__left'>
				<ul className='menu__left__list'>
					<li className='menu__left__list__item'>
						<img src={Logo} alt='logo' />
					</li>
					<li className='menu__left__list__item'>Marketplace</li>
					<li className='menu__left__list__item'>Resource</li>
					<li className='menu__left__list__item'>About</li>
				</ul>
			</div>
			<div className='menu__right'>
				<div className='menu__right__search'>
					<input type='text' placeholder='Search' />
					<IoSearchOutline
						size={28}
						color='#999'
						style={{
							cursor: "pointer",
						}}
					/>
				</div>
				<div className='menu__right__upload'>Upload</div>
				<div className='menu__right__wallet'>Connect wallet</div>
			</div>
		</div>
	);
};

export default Menu;
