import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SpeedApp from './components/SpeedApp';

function App() {
 
  return (
    <div className='app' >
      <Navbar />
      <SpeedApp />
      <Footer />
    </div>
  );
}

export default App;
