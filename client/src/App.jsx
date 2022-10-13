import { useState, useEffect } from 'react';
import Timeline from './components/Timeline';
import BottomNav from './components/BottomNav';
import CommentsSection from './components/CommentsSection';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import Profile from './components/Profile';
import Search from './components/Search';
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

  const create = () => {
    setPage('create')
  }

  const timeline = () => {
    setPage('timeline')
  }

  const search = () => {
    setPage('search')
  }

  const profile = () => {
    setPage('profile')
  }
  return (
    <div className="app flex">
      <div className='app-container flex'>
      {/* <SignUp /> */}
      {!auth && <LogIn setAuth={setAuth} />}
      {auth && page === 'timeline' && <Timeline comments={() => comments()} create={() => create()} />}
      {/* {page === 'comments' && <CommentsSection />} */}
      {auth && page == 'create' && <CreatePost timeline={() => timeline()} />}
      {auth && page == 'profile' && <Profile />}
      {auth && page == 'search' && <Search />}
      {/* {auth && page == 'timeline' && <BottomNav profile={() => profile()} />} */}
      </div>
      {auth && <BottomNav profile={() => profile()} timeline={() => timeline()} search={() => search()} page={page} />}
    </div>
  );
}

export default App;
