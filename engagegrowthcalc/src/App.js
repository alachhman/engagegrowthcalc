import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import Divider from "./components/Divider";

function App() {
  return (
      <section className="layout">
          <div className="header"><Header/></div>
          <div className="main">
              <div className="main-row">
                  <Calculator/>
                  <Divider/>
                  <Calculator/>
              </div>
          </div>
          <div className="footer"><Footer/></div>
      </section>
  );
}

export default App;
