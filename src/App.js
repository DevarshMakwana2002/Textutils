import "./App.css";
import NaveBar from "./components/NaveBar";
import TextForm from "./components/TextForm";
import Appcontext from "./context/Appcontext.context";
function App() {
  return (
    <>
      <Appcontext>
        <NaveBar title="Textutils" AboutText="About" />
        <div className="container my-3">
          <TextForm heading="Enter the text to analyze" />
        </div>
      </Appcontext>
    </>
  );
}

export default App;
