import React from 'react';
import '../stylesheets/components/Notes.css';
import Aside from './Aside';
import Main from './Main';

const Notes = () => {
  return (
    <div className="notes">
      <Aside />
      <Main />
      <div className="emptySpace"></div>
    </div>
  );
};

export default Notes;