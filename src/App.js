import AmazeNft from "./components/AmazeNft";
import Banner from "./components/Banner";
import CollectionNfts from "./components/CollectionNfts";
import Display from "./components/Display";
import Menu from "./components/Menu";
import SellNfts from "./components/SellNfts";
import DiscoverNfts from "./components/DiscoverNfts";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='app'>
			<Menu />
			<Banner />
			<AmazeNft />
			<Display />
			<CollectionNfts />
			<SellNfts />
			<DiscoverNfts />
			<Footer />
			<div className='footer__copyright'>Copyright &copy; 2022 Atif</div>
		</div>
	);
}

export default App;
