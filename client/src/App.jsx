import Timeline from './components/Timeline';
import BottomNav from './components/BottomNav';

import './App.css';
document.documentElement.setAttribute("data-theme", "dark");

function App() {
  return (
    <div className="App">
      <Timeline />
      <BottomNav />
    </div>
  );
}

export default App;
