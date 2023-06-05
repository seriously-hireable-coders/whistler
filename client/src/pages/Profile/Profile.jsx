import React, { useState, useEffect } from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import EditProfile from '../../components/EditProfile/EditProfile';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Whistle from '../../components/Whistle/Whistle';

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [userWhistles, setUserWhistles] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {

        const userWhistles = await axios.get(`/whistles/user/all/${id}`);
        const userProfile = await axios.get(`/users/find/${id}`);

        setUserWhistles(userWhistles.data);
        setUserProfile(userProfile.data);
      } catch (err) {
        console.log('error', err);
      }
    };

    fetchData();
  }, [currentUser, id]); // Load only when current user and id changes

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="px-6">
          <LeftSidebar />
        </div>
        <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
          <div className="flex justify-between items-center">
            {/* <img src="" alt="" /> */}
            {currentUser._id === id ? (
              <button className="px-4 -y-2 bg-red-500 rounded-full text-white"
              onClick={() => setOpen(true)}
              >
                Edit Profile
              </button>
            ) : currentUser.following.includes(id) ? (
              <button className="px-4 -y-2 bg-red-500 rounded-full text-white">
                Following
              </button>
            ) : (
              <button className="px-4 -y-2 bg-red-500 rounded-full text-white">
                Follow
              </button>
            )}
          </div>
          <div className="mt-6">
            {userWhistles &&
            userWhistles.map((whistle) => {
              return <div className="p-2" key={whistle._id}>
                <Whistle whistle={whistle} setData={setUserWhistles} />
              </div>
            })}
          </div>
        </div>
        <div className="px-6">
          <RightSidebar />
        </div>
      </div>
      {open && <EditProfile setOpen={setOpen} />}
    </>
  );
};

export default Profile;