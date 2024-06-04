import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./features/Home.tsx";
import {ModuleButton} from "./features/ModuleButton/ModuleButton.tsx";
import {ModuleWire} from "./features/ModuleWIre/ModuleWire.tsx";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/button' element={<ModuleButton/>} />
        <Route path='/wire' element={<ModuleWire/>} />
    </Routes>
  )
}

export default App
