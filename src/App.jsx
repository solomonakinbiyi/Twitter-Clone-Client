import "./App.css";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";

function App() {
  return (
    <div className="App">
      <div className="sidebar--left">
        <div className="sidebar--left--wrap" style={{position: "sticky", top: "0px"}}>
          <SidebarLeft />
        </div>
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="sidebar--right"></div>
    </div>
  );
}

export default App;
