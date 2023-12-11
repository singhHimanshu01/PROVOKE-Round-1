import React from 'react';
import ReactPlayer from 'react-player/youtube';

const FetchVideoSection = ({ videoId }) => {
  return (
    <div className="Player">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls width="65vw" height="55vh"/>
    </div>
  );
};

export default FetchVideoSection;
