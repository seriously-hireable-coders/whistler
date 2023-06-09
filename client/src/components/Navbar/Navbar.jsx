import React, { useState } from 'react';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import SearchIcon from '@mui/icons-material/Search';
import UserPlaceholder from '../UserPlaceholder/UserPlaceholder';

import { useLocation } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation().pathname;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 my-5 justify-center">
      <div className="mx-auto md:mx-0">
        <img src="/Whistler3.png" alt="whistler3" width={"80px"} className="ml-4 rounded-lg" />
        <div className="content">
          <h2>WHISTLER</h2>
          <h2>WHISTLER</h2>
        </div>
      </div>

      <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">
            {location.includes('profile') ? (
              <UserPlaceholder setUserData={setUserData} userData={userData} />
            ) : location.includes('explore') ? (
              'Explore'
            ) : (
              'Home'
            )}
          </h2>
          <StarBorderPurple500Icon />
        </div>
      </div>

      <div className="px-0 md:px-6 mx-auto">
        <SearchIcon className="absolute m-2" />
        <input type="text" placeholder="Search it baby!" className="bg-yellow-400 rounded-full py-2 px-8" />
      </div>
    </div>


  )
};

export default Navbar;
