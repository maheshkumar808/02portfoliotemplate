import React from 'react';

function ImageCard({ image, tittle }) {
  return (
    <section className="w-full justify-items-center text-center border-2 border-gray-300">
      <div className="w-full justify-items-center ">
        <img className="w-full" src={image} />
      </div>
      <div className=" w-full py-8 bg-white">
        <h1 className="text-xl font-bold text-gray-800 py-2">{tittle}</h1>
        <p className="text-lg text-gray-600 ">
          Ornare nulla proin odio consequat
        </p>
      </div>
    </section>
  );
}

export default ImageCard;
