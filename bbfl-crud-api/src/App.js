import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faRefresh, faBan} from '@fortawesome/free-solid-svg-icons';
import Header from './components/header';
import Footer from './components/footer';
import { BrewerList } from './components/BrewerList'; 

library.add(faRefresh, faBan);

function App() {
  return (
    <div className='App'>
      <Header/>
      <img src='./craft-beer-hero.png' class='img-fluid border border-danger border-1 rounded' alt='craft beer image'></img>      
      <BrewerList/>
      <Footer/>
    </div>
  );
}

export default App;
