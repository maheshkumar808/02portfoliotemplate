import React from 'react';

function Card({ icon, tittle }) {
  return (
    <section className="w-full justify-items-center text-center  bg-white border-2 border-gray-300 p-10">
      <div className="w-full justify-items-center ">
        {icon &&
          React.cloneElement(icon, { className: 'size-28 text-pink-200' })}
      </div>
      <div className=" w-full ">
        <h1 className="text-xl font-bold text-gray-800 py-2">{tittle}</h1>
        <p className="text-lg text-gray-600 ">
          Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
          amet consequat lorem dolore.
        </p>
      </div>
    </section>
  );
}

export default Card;
