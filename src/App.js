import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/annadowding">Anna Dowding</a> and is{" "}
          <a href="https://github.com/annadowding/weatherapp"> open-sourced</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
