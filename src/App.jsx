import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AskMeAnythingForm from './components/AskMeAnythingForm';
import ResponsesPage from './components/ResponsesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Ask me Anonymously</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Ask Me Anything</Link>
            </li>
            <li>
              <Link to="/responses">Responses</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/responses" element={<ResponsesPage />} />
          <Route path="/" element={<AskMeAnythingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;