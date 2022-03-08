// Importing the App.css and the NoteList.js component.
import './App.css';
import NoteList from './Components/NoteList';

// Making the call to implement the contents of the NoteList.js component. 
function App() {
  return (
    <div className="notes-app">
      <NoteList />
    </div>
  );
}

export default App;