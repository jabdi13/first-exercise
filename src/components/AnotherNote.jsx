import React from 'react';
import '../stylesheets/components/AnotherNote.css';
import anotherNote from '../img/imgSuffring.png'

const AnotherNote = () => {
  return (
    <div className="anotherNote">
      <h2 className="anotherNote__title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h2>
      <div className="anotherNote__content">
        <div className="anotherNote__info">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam a, praesentium numquam porro corrupti vitae quidem
            consectetur laboriosam amet dolor. Autem placeat iure nostrum
            illum itaque molestias quisquam in ipsam? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Officia incidunt explicabo
            praesentium ad maiores architecto excepturi quidem, eius Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Cumque
            debitis, eos porro temporibus voluptatem cum odio iusto ipsa
            et explicabo! Dicta saepe harum id vitae tempora sed placeat
            sequi dolorem! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ea quod earum deleniti, ut voluptatum soluta
            esse dignissimos debitis repellendus inventore sit as respice
            de esse memento, memento mori
                </p>
          <div>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minima, voluptas accusamus itaque deleniti dicta reiciendis
              atque incidunt Lorem ipsum dolor sit amet consectetur,
                  </p>
          </div>
          <p>
            lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis repellat id itaque minima alias nostrum accusamus
            perspiciatis commodi quasi doloremque asperiores ipsam amet
            facere, consequatur quia porro veniam nulla dolorem. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            nisi ullam, molestiae perspiciatis excepturi soluta corporis,
            laudantium velit recusandae repellat odio eaque atque.
            Corporis aspernatur voluptas omnis fugit magnam velit. Lorem,
            ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis architecto repellendus
            alias nihil iste aspernatur minus necessitatibus dolore facere
            voluptate odit laboriosam rerum, aperiam voluptas accusamus
            porro earum. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Temporibus cum animi blanditiis! Quam,
            cupiditate velit, optio, animi sed voluptatibus ipsa facilis
            at qui nemo est quibusdam quae provident! Excepturi, error.
                </p>
        </div>
        <div className="anotherNote__img">
          <img src={anotherNote} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AnotherNote;