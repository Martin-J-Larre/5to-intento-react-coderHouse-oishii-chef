import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import IntemDetailContainer from './components/ItemDetailContainer/IntemDetailContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos"/>
      <IntemDetailContainer />
    </div>
  );
}

export default App;
