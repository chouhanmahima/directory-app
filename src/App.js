import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddNewPerson from './components/AddNewPerson';
import Retrieve from './components/Retrieve';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<AddNewPerson />} />
          <Route path='/retrieve' element={<Retrieve />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
