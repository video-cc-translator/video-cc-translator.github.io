import GlobalStyle from './assets/global';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import Changelog from './pages/Changelog';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/changelog' element={<Changelog />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
