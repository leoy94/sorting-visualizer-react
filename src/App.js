import logo from './logo.svg';
import './App.css';
import {store} from "./Redux_Assets/Store/store.js";
import redux from "redux";
import {Provider} from "react-redux";
import VisualizerCore from "./Views/VisualizerCore";


function App() {
  return (
  <Provider store={store}>
      <div style={{
        backgroundColor: "#282c34",
        minHeight: "100vh",
        height: "100%",
        color: "white"
      }}>
          <VisualizerCore></VisualizerCore>
      </div>
  </Provider>
  );
}

export default App;
