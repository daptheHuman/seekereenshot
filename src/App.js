import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Upload from './components/Upload';

function App() {
	return (
		<div className="App">
			<Header className="App-header" />
			<Upload />
			<ImageGrid />
		</div>
	);
}

export default App;
