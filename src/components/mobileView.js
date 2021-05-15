import React from 'react';
import { UserAgent } from '@quentin-sommer/react-useragent';

const style = { marginTop: '30%', textAlign: 'center', padding: '10px' };

const MobileView = ({ socket }) => {
  if (socket && socket.close) {
    socket.close();
  }
  return (
    <div style={style}>
      <h3>Please use our mobile app to explore.</h3>
      <UserAgent android>
        <h6>Go to playstore and install our andriod app.</h6>
      </UserAgent>
      <UserAgent ios>
        <h6>Go to iOS store and install our iOS app.</h6>
      </UserAgent>
    </div>
  );
};

export default MobileView;
