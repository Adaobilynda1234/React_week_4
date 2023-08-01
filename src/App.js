import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <h1>
          open source by
          <a href="https://github.com/Adaobilynda1234/React_week_4.git">
            Adaobi Lynda
          </a>
        </h1>
      </header>
    </div>
  );
}

export default App;
