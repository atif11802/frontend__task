import AmazeNft from "./components/AmazeNft";
import Banner from "./components/Banner";
import Display from "./components/Display";
import Menu from "./components/Menu";

function App() {
	return (
		<div className='app'>
			<Menu />
			<Banner />
			<AmazeNft />
			<Display />
		</div>
	);
}

export default App;
