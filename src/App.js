import './App.css';
import NaveBar from './components/NaveBar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <NaveBar title="Textutils" AboutText="About" />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
