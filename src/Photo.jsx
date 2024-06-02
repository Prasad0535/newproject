import React from 'react';

const Photo = ({ photoUrl }) => {
  return (
    <div className="photo">
      <img src={photoUrl} alt="img" style={{ maxWidth: '80%', maxHeight: '50%' }} />
    </div>
  );
};

export default Photo;

