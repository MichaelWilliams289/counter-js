import './App.css';
import Greeting from './components/greeting'
import Logo from './components/Logo';
import Counter from './components/counter'
function App() {
  const Username = " Tayshaun ";
  return (
<div>
  <Greeting name={Username}/>
  <Counter />
  <Logo />
</div>
  );
}


export default App;