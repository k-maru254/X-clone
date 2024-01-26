import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

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
