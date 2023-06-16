import React from "react";

const Content = () => {
  return (
    <section className="text-gray-600 body-font" id="contents">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            What is our app and why do you need it?
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Learn how our app can help you interact with any book or document and get answers to your questions quickly and easily.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg transition duration-300 delay-150 shadow-md shadow hover:shadow-2xl delay-300">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-violet-100 text-violet-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Upload and Convert
              </h2>
              <p className="leading-relaxed text-base">
                Upload any book or document and convert it to digital format.
                Scan physical books or documents with your camera. Support for
                various file types.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg transition duration-300 delay-150 shadow-md shadow hover:shadow-2xl delay-300">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-violet-100 text-violet-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Chat and Learn
              </h2>
              <p className="leading-relaxed text-base">
                Create a chat bot from any book or document and ask questions
                about the material. Get accurate and relevant answers using AI
                and LLMs. Ask for explanations, examples, or summaries.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg transition duration-300 delay-150 shadow-md shadow hover:shadow-2xl delay-300">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-violet-100 text-violet-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Quiz and Review
              </h2>
              <p className="leading-relaxed text-base">
                Create quizzes from your questions and save them for later
                review. Get automatic questions based on your queries. Customize
                the quizzes and review them anytime. Get feedback and tips.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg transition duration-300 delay-150 shadow-md shadow hover:shadow-2xl delay-300">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-violet-100 text-violet-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Track and Progress
              </h2>
              <p className="leading-relaxed text-base">
                Track your progress and performance with our dashboard. See how
                many books, documents, questions, quizzes, and scores you have.
                See your strengths and weaknesses and get recommendations.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg transition duration-300 delay-150 shadow-md shadow hover:shadow-2xl delay-300">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-violet-100 text-violet-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Share and Collaborate
              </h2>
              <p className="leading-relaxed text-base">
                Share your questions, prompts, quizzes, and results with others
                using our app. Collaborate by asking or answering questions,
                giving or receiving feedback, or joining study groups. Learn
                from others and build a community. Control the privacy and
                access of your shared items.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg transition duration-300 delay-150 shadow-md shadow hover:shadow-2xl delay-300">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-violet-100 text-violet-700 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Enjoy and Explore
              </h2>
              <p className="leading-relaxed text-base">
                Create your own library of books or documents that you can
                access anytime. Textbooks will be available for 3-4 months and
                will be automatically removed after the semester ends, so you
                can save space and get ready for the next semester.
              </p>
            </div>
          </div>
        </div>
        <a href="#addBookMessage">
          <button className="flex mx-auto mt-16 text-white bg-indigo-900 border-0 py-2 px-8 focus:outline-none hover:bg-violet-700 rounded text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-violet-700 duration-300">
            Have a book in mind?
          </button>
        </a>
        
      </div>
    </section>
  );
};

export default Content;
