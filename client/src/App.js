import React, { useState, useEffect } from'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Explore from './pages/Explore/Explore';
import Signin from './pages/Signin/Signin';
import Navbar from './components/Navbar/Navbar';
import Error from './pages/Error/Error';

const Layout = () => {
  return (
    <div className="md:w-8/12 mx-auto">
   <Navbar />
    <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/signout',
        element: <Signin />,
      },
    ]
  },
]);

// export const URL = process.env.REACT_APP_SERVER

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className="bg-blue-500 px-4 py-2 text-white rounded-full">Toggle Theme</button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
