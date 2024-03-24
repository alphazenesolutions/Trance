import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import Routing from "./Routing/Routing";
import Store from "./Store/Store";
import { storeAction } from "./Store/Store";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const isPopUp = useSelector((store) => {
    return store.isPopUp;
  });
  const closeOverlay = () => {
    dispatch(storeAction.isPopUpHander(""));
  };
  console.log(isPopUp);
  return (
    <Provider store={Store}>
      <div className="App ">
        {isPopUp == "call" && <div onClick={closeOverlay} id="overlay"></div>}
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
