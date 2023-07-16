import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Footer from './components/footer';
import { BrewerList } from './components/BrewerList'; 

function App() {
  return (
    <div className="App">
      <Header/>
      <BrewerList/>
      <Footer/>
    </div>
  );
}

export default App;
