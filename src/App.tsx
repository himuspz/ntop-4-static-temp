import "./App.css";
import './index.css'
import { TrustedSlider } from "./components/TrustedSlider";
import { Industries } from "./components/Industries";

function App() {
	return (
		<div style={{ background: 'black', minHeight: '100vh' }}>
			<TrustedSlider />
			<hr style={{ background: 'white', margin: '25px 0px 25px 0px' }} />
			<Industries />
		</div>
	);
}

export default App;
