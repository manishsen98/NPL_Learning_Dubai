import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header  from './component/Header';
import CounterComponent from './sections/CounterComponent';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/counter" element={<CounterComponent/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
