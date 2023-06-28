import './App.css';
import Greeting from './components/greeting';
import Logo from './components/logo';
import Counter from './components/counter';
function App() {
  const Username ="Micheal";
  return (
   <div>
    <Greeting name={Username}/>
    <Logo />
    <Counter />
   </div> 
  );
}

export default App;