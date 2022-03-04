import AmazeNft from "./components/AmazeNft";
import Banner from "./components/Banner";
import CollectionNfts from "./components/CollectionNfts";
import Display from "./components/Display";
import Menu from "./components/Menu";
import SellNfts from "./components/SellNfts";

function App() {
	return (
		<div className='app'>
			<Menu />
			<Banner />
			<AmazeNft />
			<Display />
			<CollectionNfts />
			<SellNfts />
		</div>
	);
}

export default App;
