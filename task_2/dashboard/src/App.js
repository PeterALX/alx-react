import logo from "./logo.jpg";
import "./App.css";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>
          Email: <input type="text" />
        </label>
        <label>
          Password: <input type="password" />
        </label>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </div>
    </div>
  );
}

export default App;
