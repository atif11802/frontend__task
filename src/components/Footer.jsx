import React from "react";
import "../styles/Footer.css";
import Nfters from "../images/NFters.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer1'>
				<img src={Nfters} alt='Nfters' />

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
					voluptas, nulla, quisquam blanditiis iusto libero quasi sequi
				</p>
				<div className='footer1__social'>
					<div className='footer1__social__icons'>
						<BsFacebook size={30} color={"#4267B2"} />
					</div>
					<div className='footer1__social__icons'>
						<FaTwitterSquare size={30} color={"#1DA1F2"} />
					</div>
					<div className='footer1__social__icons'>
						<BsLinkedin size={30} color={"#0077b5 "} />
					</div>
				</div>
			</div>
			<div className='footer2'>
				<h1>Market place</h1>
				<ul>
					<li>all nfts</li>
					<li>New</li>
					<li>Art</li>
					<li>Sports</li>
					<li>Utility</li>
					<li>Music</li>
				</ul>
			</div>
			<div className='footer3'>
				<h1>My Account</h1>
				<ul>
					<li>Profile</li>
					<li>Favourite</li>
					<li>My Collections</li>
					<li>Settings</li>
				</ul>
			</div>
			<div className='footer4'>
				<h1>setting tin loop</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
					asperiores earum ab sequi impedit rem, itaque deleniti voluptas,
					voluptates dicta corrupti eligendi veritatis at esse autem ut repellat
					error neque.
				</p>
			</div>
		</div>
	);
};

export default Footer;
