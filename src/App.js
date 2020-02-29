import React from 'react';
import './App.css';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Need to add menu component later (Home, Projects, Tasks, Bugs, Users) */}
        Project----Dash
      </header>
      <div className="App-body">
        {/* Projects section - May change to a layout component later */}
        <Projects></Projects>
      </div>

      <footer>
        {/* Need to add footer later */}
      </footer>
    </div>
  );
}

export default App;
