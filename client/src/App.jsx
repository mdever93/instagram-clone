import { useState } from 'react';
import Timeline from './components/Timeline';
import BottomNav from './components/BottomNav';
import CommentsSection from './components/CommentsSection';
import LogIn from './components/LogIn';

import './App.css';
document.documentElement.setAttribute("data-theme", "dark");

function App() {
  const [page, setPage] = useState('timeline')

  const comments = () => {
    setPage('comments')
  }
  return (
    <div className="app">
      <LogIn />
      {/* { page === 'timeline' && <Timeline comments={() => comments()} />}
      {page === 'comments' && <CommentsSection /> }
      { page !== 'comments' && <BottomNav />} */}
    </div>
  );
}

export default App;
