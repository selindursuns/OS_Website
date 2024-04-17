import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/main";
import Prototypes from "./components/Prototypes"; // Import the Prototypes component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/prototypes" element={<Prototypes />} /> {/* Use element prop to specify the component */}
      </Routes>
    </Router>
  );
}

export default App;
