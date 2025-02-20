import React from 'react';

function Top() {
  return (
    <section id="top" className="w-full bg-white">
      <div className="lg:max-w-screen-xl lg:h-screen mx-auto justify-center items-center flex flex-col">
        <div className="grid md:grid-cols-12  ">
          <div className="w-full col-span-4 ">
            <img
              className="rounded-[10rem]"
              src="https://html5up.net/uploads/demos/miniport/images/pic00.jpg"
            />
          </div>
          <div className="w-full col-span-8 p-8 text-left">
            <h1 className="text-5xl text-black">
              Hi. I'm <strong>Harish</strong>
            </h1>
            <p className="text-2xl text-gray-600 leading-loose py-8">
              And this is{' '}
              <span className="text-gray-800">
                <strong>Miniport</strong>
              </span>
              , a free, fully responsive HTML5 site template designed by AJ for
              HTML5 UP & released under the CCA license.
            </p>
            <button className="text-center text-xl font-bold py-6 px-8 rounded-lg bg-sky-600">
              Learn about what i do
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Top;
