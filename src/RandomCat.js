import React, { useState, useEffect } from "react";
import catImg from './assets/cat.jpg'
export default function RandomCat() {
  // const [randomCatImg, setRandomCatImg] = useState(null);

  // const fetchRandomCat = () => {
  //   setRandomCatImg("");
  //   fetch(`https://aws.random.cat/meow`)
  //     .then((res) => res.json())
  //     .then((catInfo) => {
  //       setRandomCatImg(catInfo.file);
  //     });
  // };

  // useEffect(() => {
  //   if (randomCatImg === null) {
  //     fetchRandomCat();
  //   }
  // });

  return (
    <div>
      <header>
        <h3>Cat of the day</h3>
        {/* <div>
          <button onClick={() => fetchRandomCat()}>New Cat</button>
        </div> */}
        {catImg !== "" ? (
          <div>
            <img src={catImg} width="400px" alt="Cat" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}
