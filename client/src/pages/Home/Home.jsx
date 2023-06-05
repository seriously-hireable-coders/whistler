import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import MainWhistles from '../../components/MainWhistles/MainWhistles';
import Signin from '../Signin/Signin';

import { useSelector } from'react-redux';
// import { useNavigate } from 'react-router-dom';

const Home= () => {
  const { currentUser } = useSelector((state) => state.user);

  // console.log('user', currentUser);
  return (
    <>
    {!currentUser ? (
      <Signin />
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="px-6">
        <LeftSidebar />
        </div>
        <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
        <MainWhistles />
        </div>
        <div className="px-6">
          <RightSidebar />
        </div>
    </div>
    )}
    </>

  );
};

export default Home;