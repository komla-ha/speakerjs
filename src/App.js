import "./App.css";
import SearchSpeaker from "./components/SearchSpeaker";

const speakerName = "John Wilson";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Bizza Platform, {speakerName}</h1>
      <SearchSpeaker />
    </div>
  );
}

export default App;
