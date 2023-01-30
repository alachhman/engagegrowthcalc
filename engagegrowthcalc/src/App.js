import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";

function App() {
  return (
      <section className="layout">
          <div className="header"><Header/></div>
          <div className="main"><Calculator/></div>
          <div className="footer"><Footer/></div>
      </section>
  );
}

export default App;
