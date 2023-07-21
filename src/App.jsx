import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sidebar--left">
          <SidebarLeft />
        </div>
        <div className="main">
          <Main />
        </div>
        <div className="sidebar--right">
          <SidebarRight />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
