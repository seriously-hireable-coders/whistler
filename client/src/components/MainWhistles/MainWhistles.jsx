import React, { useState } from 'react'
import TimelineWhistle from '../TimelineWhistle/TimelineWhistle';

import { useSelector } from 'react-redux';
import axios from 'axios';

const MainWhistles = () => {
  const [whistleText, setWhistleText] = useState('');

  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const submitWhistle = await axios.post("/whistles", {
        userId: currentUser._id,
        description: whistleText,
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {currentUser && (
        <p className="font-bold pl-2 my-2">{currentUser.username}</p>
      )}


      <form className="border-b-2 pb-6">
        <textarea
          onChange={(e) => setWhistleText(e.target.value)}
          type="text"
          maxLength={300}
          placeholder="Blow that Whistle baby!"
          className="bg-slate-300 rounded-lg w-full p-2 text-black">
        </textarea>
        <button
          onClick={handleSubmit}
          className="bg-red-500 text-white py-2 px-4 rounded-full ml-auto">
          Whistle
        </button>
      </form>
      <TimelineWhistle />
    </div>
  )
};

export default MainWhistles;
