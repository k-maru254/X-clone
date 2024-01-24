import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="bg-secondary d-flex vh-100 vw-100" >
      {/* Header */ }
      <Header/>
      {/* Main  */ }
      <Main/>
    </div>
  );
}

export default App;
