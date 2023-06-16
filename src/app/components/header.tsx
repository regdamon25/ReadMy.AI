import React from 'react';
import { Readmyai_logo } from './svgs';

const Header = () => {
    return (
      <header className="text-gray-600 body-font bg-gradient-light">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Readmyai_logo 
            className='w-12 h-12 rounded-lg shadow-2xl'
           />
            <span className="ml-3 text-xl">ReadMy.AI</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          <a href="#addBookMessage">
          <button className="inline-flex items-center text-white bg-indigo-900 border-0 py-1 px-3 focus:outline-none hover:bg-violet-700 rounded text-base mt-4 md:mt-0">
            Suggest a book
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </a>
          
        </div>
      </header>
    );
}

export default Header