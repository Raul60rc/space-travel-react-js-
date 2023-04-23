
import './App.scss';
import Ptag from './components/Atoms/Ptag';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Slogan from './components/Slogan';



const App = ()  =>{
  console.log('Hola desde App');
  // const name = "Luisfer";
  return (
    
    <div className="App">
    <Slogan agency = "Salvare" location = "Milky Way" /> 
    <Slogan agency = "Lazarus" location = "Alpha Centauri" /> 
    <Slogan agency = "Geminis" location = "Sirius A"/> 
      {/* <h1>App Works!</h1>
      <p>Hola {name}</p>
      <Home/>
      <Characters/>
      <Ptag texto = "MONDONGO"/> */}
    </div>
  );
}

export default App;
