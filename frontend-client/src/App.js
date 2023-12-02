import React from 'react';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SearchUsers from './components/SearchUser';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import { PostProvider } from './contexts/PostProvider';
import { UserProvider } from './contexts/UserProvider';


function App() {
  return (
    <UserProvider>
    <PostProvider>
      <div>
          <BrowserRouter>
              <nav className='nav-link'>
                  <h3 className='heading'>Welcome To Pop Social</h3>
                  <Link to="/signup">Sign Up</Link>
                  <span> | </span>
                  <Link to="/signin">Sign In</Link>
                  <span> | </span>
                  <Link to="/post">All Pop Post</Link>
                  <Link to="/searchusers">Search Users</Link>
                  <hr></hr>
              </nav>
              <Routes>
                  <Route exact path="/" element={ <SignIn /> } />
                  <Route path="/signin" element={ <SignIn /> } />
                  <Route path="/signup" element={ <SignUp /> } />
                  <Route path="/post/new" element={ <NewPost /> } />
                  <Route path="/searchusers" element={ <SearchUsers /> } />
                  <Route path="/post" element={ <PostList /> } />
              </Routes>
          </BrowserRouter>
      </div>
  </PostProvider>
  </UserProvider>
  );
}

export default App;