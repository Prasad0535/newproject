import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from './Photo';
import './photo.css'

const Photos = ({ count }) => {
  const [Photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'random',
            count: count,
            orientation: 'portrait',
            client_id: 'n_Dk0xR0eVwMspW7fXorFlLN1ng2OKHtZdROIvbFIqc',
          },
        });
        setPhotos(response.data.map(photo => photo.urls.regular));
      } catch (error) {
        console.error('Error fetching cat photos:', error);
      }
    };

    fetchPhotos();
  }, [count]);

  return (
    <>
           <div className="photos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 0fr))', gridGap: '0' }}>
      {Photos.map((photoUrl, index) => (
        <Photo key={index} photoUrl={photoUrl} />
      ))}
    </div>
     
    
    </>
  
  );
};

export default Photos;

