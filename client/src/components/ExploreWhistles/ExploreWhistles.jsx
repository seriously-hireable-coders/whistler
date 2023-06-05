import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useSelector } from'react-redux';
import Whistle from '../Whistle/Whistle';

const ExploreWhistles = () => {
  const [explore, setExplore] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exploreWhistles = await axios.get("/whistles/explore");
        setExplore(exploreWhistles.data);
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  }, [currentUser._id]);

  return (
    <div className="mt-6">

      {explore && explore.map((whistle) => {
        return(
          <div key={whistle._id} className="p-2">
            <Whistle whistle={whistle} setData={setExplore} />
          </div>
        );
      })}

    </div>
  );
};

export default ExploreWhistles;