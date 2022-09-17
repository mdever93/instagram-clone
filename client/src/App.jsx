import { useState, useEffect } from 'react';
import Timeline from './components/Timeline';
import BottomNav from './components/BottomNav';
import CommentsSection from './components/CommentsSection';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Cookies from 'js-cookie';

import './App.css';
document.documentElement.setAttribute("data-theme", "dark");

function App() {
  const [auth, setAuth] = useState(false);
  const [page, setPage] = useState('timeline');

  useEffect(() => {
    const userLoggedIn = Cookies.get('user');
    if (userLoggedIn) {
      console.log(userLoggedIn);
      setAuth(true)
    }  
  }, [])
  

  const comments = () => {
    setPage('comments')
  }
  return (
    <div className="app">
      {/* <SignUp /> */}
      {!auth && <LogIn setAuth={setAuth} />}
      {auth && page === 'timeline' && <Timeline comments={() => comments()} />}
      {/* {page === 'comments' && <CommentsSection />} */}
      {auth && page !== 'comments' && <BottomNav />}
    </div>
  );
}

export default App;
