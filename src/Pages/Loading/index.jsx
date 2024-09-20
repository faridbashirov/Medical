import React from 'react';
import spinner from '../../assets/gif/spinner.gif';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-page">
        <img className='loading-spinner' src={spinner} alt="" />
    </div>
  );
};

export default Loading;