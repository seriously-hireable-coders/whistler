import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import Whistle from '../Whistle/Whistle';

const TimelineWhistle = () => {
  const [timeLine, setTimeLine] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timelineWhistles = await axios.get(`/whistles/timeline/${currentUser._id}`);
        setTimeLine(timelineWhistles.data);
      } catch (err) {
        console.log('error', err);
      }
    };

    fetchData();
  }, [currentUser._id]);

  console.log('Timeline', timeLine);

  return (
    <div className="mt-6">
      {timeLine &&
        timeLine
          .slice() // Create a copy of the array
          .reverse() // Reverse the copy
          .map((whistle) => (
            <div key={whistle._id} className="p-2">
              <Whistle whistle={whistle} setData={setTimeLine} />
            </div>
          ))}
    </div>
  );
};

export default TimelineWhistle;


// const TimelineWhistle = () => {
//     const[timeLine, setTimeLine] = useState(null);

//     const { currentUser } = useSelector((state) => state.user);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const timelineWhistles = await axios.get(
//           `/whistles/timeline/${currentUser._id}`
//           );

//           setTimeLine(timelineWhistles.data);
//       } catch (err) {
//         console.log('error', err);
//       }
//     };

//     fetchData();
//   }, [currentUser._id]); // Load whistles only when there is current user

//   console.log('Timeline', timeLine);
//   return (
//     <div className="mt-6">
//       {timeLine &&
//       timeLine.map((whistle) =>{
//         return <div key={whistle._id} className="p-2">
//           <Whistle whistle={whistle} setData={setTimeLine} />
//         </div>;
//       })}
//     </div>
//   )
// };

// export default TimelineWhistle;
