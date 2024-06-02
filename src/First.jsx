import React from 'react'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import './App2.css'
function First(count) {
  const [catPhotoUrl,setCatPhotoUrl] = useState('');

  useEffect(() => {
    const fetchCatPhoto = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'cat',
            orientation: 'landscape',
            client_id: 'lw3mPbVRKOVwhY6DLHghUt6ggxUFin7-dVIiQ4rKalw',
          },
        });
        setCatPhotoUrl(response.data.urls.regular);
      } catch (error) {
        console.error('Error fetching cat photo:', error);
      }
    };

    fetchCatPhoto();
  },[]);

  return (
    <>
        <h1>
            THis Page for API 
        </h1>
        <div>
      {catPhotoUrl && (
        <img src={catPhotoUrl} alt="Random Cat" style={{ maxWidth: '10%', maxHeight: '10%' }} />
       
      )}
    </div>
    </>
  )
}

export default First