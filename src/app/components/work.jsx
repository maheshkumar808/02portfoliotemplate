import React from 'react';
import Card from './elements/Card';
import { FaCameraRetro } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { TiMessages } from 'react-icons/ti';

function work() {
  return (
    <section id="work" className="w-full bg-slate-100">
      <div className="lg:max-w-screen-xl justify-items-center mx-auto py-10 px-6 ">
        <div className="w-full  text-center">
          <h1 className="text-4xl text-gray-800 font-bold  py-6">
            Here's all the stuff I do.
          </h1>
          <p className="text-lg text-gray-600 py-6">
            Odio turpis amet sed consequat eget posuere consequat.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 justify-center">
          <div className="col-span-1">
            <Card icon=<FaCameraRetro /> tittle={'Consequat lorem'} />
          </div>
          <div className="col-span-1">
            <Card icon=<AiFillLike /> tittle={'Lorem dolor tempus'} />
          </div>
          <div className="col-span-1">
            <Card icon=<TiMessages /> tittle={'Feugiat posuern'} />
          </div>
        </div>
        <div className=" w-full text-center py-6">
          <p className="text-lg text-gray-600 ">
            Lorem ipsum dolor sit sapien vestibulum ipsum primis?
          </p>
        </div>
        <div className="py-6">
          <button className="text-center text-xl font-bold py-6 px-8 rounded-lg bg-sky-600">
            See some of my recent work
          </button>
        </div>
      </div>
    </section>
  );
}

export default work;
