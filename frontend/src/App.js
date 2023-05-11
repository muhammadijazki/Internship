import logo from './logo.svg';
import './App.css';
import StateBasics from './components/StateBasics';
import Basics from './components/Basics';
import Multipleusestate from './components/Multipleusestate';
import Oneusestate from './components/Oneusestate';
import Tablearray from './components/Tablearray';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ViewDetails from './components/ViewDetails';

function App() {
  return (
    <div className="App">
    <Navigation></Navigation> 
    {/* <Basics/> */}
    {/* <StateBasics></StateBasics> */}
    {/* <Multipleusestate></Multipleusestate> */}
    {/* <Oneusestate></Oneusestate> */}
   
    {/* <Tablearray></Tablearray> */}
    {/* <ViewDetails></ViewDetails> */}
    <Routes>
      {/* <Route path='/' element={<Tablearray/>} ></Route> */}
      {/* <Route path='/' element={<StateBasics/>} ></Route> */}
      <Route path='/basic' element={<Basics/>} ></Route>
      <Route path='/details' element={<ViewDetails/>} ></Route>
      
    </Routes>
    </div>
  );
}

export default App;
