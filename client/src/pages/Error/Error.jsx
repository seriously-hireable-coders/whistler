import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="text-center my-8 space-y-5">
      <h2 className="font-bold text-4xl">Error! Page Not Found!</h2>
      <p className="pb-2">
        Return to Log In Page <br />

      </p>

      <Link to="/signin" className="bg-blue-500 py-1 px-3 rounded-full text-white">
        Log In
      </Link>
    </div>
  )
};

export default Error;