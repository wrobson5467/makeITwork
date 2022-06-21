const React = require('react');
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav.jsx';
import Login from './components/Login.jsx';
import MainPage from './components/MainPage.jsx';
import Visualization from "./components/Visualization.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Routes>
          <Nav />
          <Route path='/visual' element={<Visualization />}></Route>
          {/* <Route path='cards' element={<CardsView />}></Route> */}
          <Route path='/main' element={<MainPage />}></Route>
          <Route path='/' element={<Login />}></Route>
        </Routes>
      </div>
    )
  }
}

export default App;