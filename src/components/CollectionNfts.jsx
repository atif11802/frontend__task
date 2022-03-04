import React from "react";
import NftsCard from "../screens/NftsCard";
import "../styles/CollectionNfts.css";

const CollectionNfts = () => {
	return (
		<div className='CollectionNfts'>
			<h1>Collection Featured NFTS</h1>
			<div className='CollectionNfts-container'>
				<NftsCard />
				<NftsCard />
				<NftsCard />
			</div>
		</div>
	);
};

export default CollectionNfts;
