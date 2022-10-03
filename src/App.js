import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import Create from './pages/Create/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
