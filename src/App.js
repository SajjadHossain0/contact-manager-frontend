import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactDetails from "./components/ContactDetails";
import AllContacts from "./components/AllContact";

function App() {
  return (
    <div className="App">
        <Header />
        <Home/>

    </div>
  );
}

export default App;
