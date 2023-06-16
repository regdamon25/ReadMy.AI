import React from "react";
import Image from "next/image";
import HeroForm from "./hero-form";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-light" id="signUp">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">
            ReadMy.AI
            <br />
          </h1>
          <p className="title-font text-3xl mb-4 font-bold text-gray-900">
            The app that lets you talk to any book or document.
          </p>
          <p className="mb-8 leading-relaxed">
            ReadMy.Ai is a revolutionary learning app that allows you to chat
            with any book or document and get instant answers to your questions.
            Whether you need to study for a test, write an essay, or learn a new
            skill, ReadMy.Ai will help you master any topic in minutes.
          </p>

          <HeroForm />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero_image1.png"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
      <div className="bg-white rounded-full p-4 animate-bounce shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="indigo"
          className="w-10 h-10 "
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
