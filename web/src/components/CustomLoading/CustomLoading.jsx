import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';

const CustomLoading = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Set the delay time in milliseconds (e.g., 3000ms = 3 seconds)

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []); // Empty dependency array to run the effect only once

  return (
    showLoader && (
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          textAlign: 'center',
          width: '100%',
          height: '100%',
          background: '#f3f3f3 url("/images/dottedpattern.png") repeat left top',
          zIndex: '10000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <img src="/images/logo2.png" alt="Logo" width="200" height="200" />
        <BeatLoader color="#d811ff" loading={true} size={15} />
      </div>
    )
  );
};

export default CustomLoading;
