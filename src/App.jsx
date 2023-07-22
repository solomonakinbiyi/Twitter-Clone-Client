import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(true);

  const activateModal = () => {
    setShowModal(true);
  }

  return (
    <BrowserRouter>
      <div
        className="modal"
        style={{ display: showModal ? "flex" : "none" }}
      >
        <form >
          <i className="bi bi-x-circle" onClick={() => setShowModal(false)}></i>
          <div className="modal--form--wrap">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
            <input type="text" placeholder="What's happening?!"/>
          </div>
          <button>Tweet</button>
        </form>
      </div>
      <div className="App">
        <div className="sidebar--left">
          <SidebarLeft propActivateModal={activateModal}/>
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
