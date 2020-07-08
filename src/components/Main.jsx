import React from 'react';
import '../stylesheets/components/Main.css';
import MainNote from './MainNote';
import AnotherNote from './AnotherNote';

const Main = () => {
  return (
    <main className="main">
      <MainNote />
      <AnotherNote />
    </main>
  );
};

export default Main;