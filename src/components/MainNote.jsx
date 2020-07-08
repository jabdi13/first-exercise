import React from 'react';
import '../stylesheets/components/MainNote.css';
import obama from '../img/newYork.png';

const MainNote = () => {
  return (
    <>
      <div className="mainNote">
        <div className="imgContainer">
          <img src={obama} alt="Obama" />
        </div>
        <h3>Rammury and Obama Bristle From Start</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          facere eum vero molestias culpa adipisci aut harum distinctio
          voluptates laudantium veritatis minima expedita autem natus eos
          eius dolore, quae aspernatur.
            </p>
      </div>
      <div className="noteDetails">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
        <div className="noteDetails__block">
          <div className="separator"></div>
          <h3>Some title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            repudiandae, ex excepturi illo deserunt officiis alias. Facilis
            deleniti ipsam quaerat architecto, sed perferendis molestias
              </p>
        </div>
        <div className="noteDetails__block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            tempore aperiam itaque, ab explicabo, nulla laboriosam cum ipsum
            eveniet enim minima ut consequuntur perferendis aut. Suscipit
            dignissimos quas est odio?
              </p>
        </div>
        <div className="noteDetails__block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            tempore aperiam itaque, ab explicabo, nulla laboriosam cum ipsum
            eveniet enim minima ut consequuntur perferendis aut. Suscipit
            dignissimos quas est odio?
              </p>
        </div>
        <div className="noteDetails__block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            tempore aperiam itaque, ab explicabo, nulla laboriosam cum ipsum
            eveniet enim minima ut consequuntur perferendis aut. Suscipit
            dignissimos quas est odio?
              </p>
        </div>
      </div>
    </>
  );
};

export default MainNote;