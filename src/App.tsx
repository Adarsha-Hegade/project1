import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SceneViewer } from './components/SceneViewer/SceneViewer';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { CategoryView } from './components/CategoryView/CategoryView';

function App() {
  return (
    <Router>
      <div className="h-screen w-full overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryView />} />
          <Route path="/:fanName" element={<SceneViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;