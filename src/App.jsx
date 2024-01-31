import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import Container from "react-bootstrap";

function App() {
  return (
    <Container className="bg-secondary vh-100" >
      <Row>
        {/* Header */ }
        <Header />
        {/* Main  */ }
        <Main />
      </Row>
    </Container>
  );
}

export default App;
