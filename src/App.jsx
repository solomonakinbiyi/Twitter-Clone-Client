import "./App.css";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

function App() {
  return (
    <div className="App">
      <div className="sidebar--left">
          <SidebarLeft />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="sidebar--right">
        <SidebarRight/>
      </div>
    </div>
  );
}

export default App;
