import React from 'react';
import AtomicSpinner from 'atomic-spinner'
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <AtomicSpinner />
    </div>
  );
};

export default Loader;
