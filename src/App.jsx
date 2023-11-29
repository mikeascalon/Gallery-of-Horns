

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from  './components/Footer';
import Gallery from './components/Gallery';
import allBeastData from './components/data.json';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
     <Header title="Galley of Horns" />
     <Gallery message="Pick your Beast" allBeastData={allBeastData} />
     <Footer author="Michelangelo Ascalon" />
    </>

  );
}


export default App;
