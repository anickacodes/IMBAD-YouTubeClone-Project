import './App.css';
import AboutPage from './components/AboutPage';
import { Route, Routes } from 'react-router-dom';
import YouTubeAPIComponent from './components/YouTubeAPIComponent';
import Home from './components/Home';
import Header from './components/Header';

function App() {
	return (
		<>

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/AboutPage" element={ <AboutPage />} />
        <Route path="/Videos" element={ <div className="card videos"> <YouTubeAPIComponent /> </div>} />
      
      </Routes>
			<div className="card videos">
				<div>
					{/* <h4>Videos Section PlaceHolder</h4> */}
					{/* <YouTubeAPIComponent /> */}
				</div>
			</div>
		</>
	);
}

export default App;
