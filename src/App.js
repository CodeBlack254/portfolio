import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Custom_particles from './components/Custom_particles';
import Aboutme from './components/Aboutme';
import Services from './components/Services';

function App () {
  return (
    <>
      <Navbar/>
      <Custom_particles/>
      <Header/>
      <Aboutme/>
      <Services/>
    </>
    
  );
}

export default App;
