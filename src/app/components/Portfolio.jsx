import React from 'react';
import ImageCard from './elements/ImageCard';

function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-slate-200">
      <div className="lg:max-w-screen-xl justify-items-center mx-auto p-6 ">
        <div className="w-full  text-center">
          <h1 className="text-3xl text-gray-800 font-bold ">
            Here's some stuff I made recently.
          </h1>
          <p className="text-lg text-gray-600 p-6">
            Proin odio consequat sapien vestibulum consequat lorem dolore
            feugiat
          </p>
        </div>
        <div className="w-full grid md:cols-2 lg:grid-cols-3 gap-4 p-6">
          <div className="col-span-1">
            <ImageCard
              image="https://html5up.net/uploads/demos/miniport/images/pic01.jpg"
              tittle="Magna feugiat
"
            />
          </div>
          <div className="col-span-1">
            <ImageCard
              image="https://html5up.net/uploads/demos/miniport/images/pic02.jpg"
              tittle="Veroeros primis
"
            />
          </div>
          <div className="col-span-1">
            <ImageCard
              image="https://html5up.net/uploads/demos/miniport/images/pic03.jpg"
              tittle="Lorem ipsum
"
            />
          </div>
          <div className="col-span-1">
            <ImageCard
              image="https://html5up.net/uploads/demos/miniport/images/pic04.jpg"
              tittle="Tempus dolore
"
            />
          </div>
          <div className="col-span-1">
            <ImageCard
              image="https://html5up.net/uploads/demos/miniport/images/pic05.jpg"
              tittle="Feugiat aliquam
"
            />
          </div>
          <div className="col-span-1">
            <ImageCard
              image="https://html5up.net/uploads/demos/miniport/images/pic06.jpg"
              tittle="Sed amet ornare
"
            />
          </div>
        </div>
        <div className=" w-full text-center py-6">
          <p className="text-lg text-gray-600 ">
            Lorem ipsum dolor sit sapien vestibulum ipsum primis?
          </p>
        </div>
        <div className="py-6">
          <button className="text-center text-xl font-bold py-6 px-8 rounded-lg bg-sky-600">
            Get in touch with me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
