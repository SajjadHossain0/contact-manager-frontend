import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactDetails from "./components/ContactDetails";

function App() {
  return (
    <div className="App">
        <Header />

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>

            <Routes>
                <Route path="/contact-details" element={<ContactDetails/>}/>
            </Routes>


        </BrowserRouter>

    </div>
  );
}

export default App;
