import React from 'react';
import Link from "next/link";
const BlogArticle = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
        {/* Content */}
        <div className="lg:col-span-2">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <a
                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-500"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back to Blog
              </a>

              <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                The Future of DevOps: Automating Multi-Cloud Management
              </h2>

              <div className="flex items-center gap-x-5">
                <a
                  className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200"
                  href="#"
                >
                  Company Insights
                </a>
                <p className="text-xs sm:text-sm text-gray-800 dark:text-neutral-200">
                  July 15, 2024
                </p>
              </div>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                At DevOps Hub, we are pioneering a new era of automation in
                cloud management. Our mission is to empower developers and
                engineers with tools that streamline multi-cloud operations,
                reduce costs, and enhance productivity.
              </p>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Today, we are excited to announce the launch of our advanced
                platform, leveraging cutting-edge AI technologies to simplify
                complex tasks across AWS, Azure, and Google Cloud. This platform
                marks a significant step towards achieving seamless
                interoperability and real-time monitoring capabilities.
              </p>

              <div className="text-center">
                <div className="grid lg:grid-cols-2 gap-3">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    <figure className="relative w-full h-60">
                      <img
                        className="size-full absolute top-0 start-0 object-cover rounded-xl"
                        src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Cloud Management"
                      />
                    </figure>
                    <figure className="relative w-full h-60">
                      <img
                        className="size-full absolute top-0 start-0 object-cover rounded-xl"
                        src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Cloud Automation"
                      />
                    </figure>
                  </div>
                  <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                      alt="Cloud Automation Platform"
                    />
                  </figure>
                </div>

                <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                  DevOps Workflow
                </span>
              </div>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                As organizations embrace digital transformation, the demand for
                agile, scalable cloud solutions continues to grow. Our platform
                addresses these challenges by providing a unified interface
                where engineers can manage deployments, monitor performance,
                and optimize resources seamlessly.
              </p>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                With features like automated scaling, predictive analytics, and
                customizable workflows, DevOps Hub empowers teams to focus on
                innovation rather than infrastructure management. We believe
                that by automating routine tasks, teams can accelerate time to
                market and drive business outcomes more effectively.
              </p>

              <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                {/* Badges/Tags */}
                <div>
                  <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200" href="#">
                    Cloud Platform
                  </a>
                  <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200" href="#">
                    Automation
                  </a>
                  <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200" href="#">
                    AI Integration
                  </a>
                  <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200" href="#">
                    Product Launch
                  </a>
                </div>
                {/* End Badges/Tags */}

                <div className="flex justify-end items-center gap-x-1.5">
                  {/* Button */}
                  <div className="hs-tooltip inline-block">
                    <button
                      type="button"
                      className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      875
                      <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black" role="tooltip">
                        Like
                      </span>
                    </button>
                  </div>
                  {/* Button */}

                  <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

                  {/* Button */}
                  <div className="hs-tooltip inline-block">
                    <button
                      type="button"
                      className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 5-5 7-5 7s-5-2-5-7V3H5v7c0 5 5 7 5 7s5-2 5-7v-7h6v7Z" />
                      </svg>
                      10
                      <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black" role="tooltip">
                        Comment
                      </span>
                    </button>
                  </div>
                  {/* Button */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Content */}

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            {/* Search */}
            <div className="p-4 bg-white rounded-lg shadow-md dark:bg-neutral-900">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                Search Articles
              </h3>
              <form action="#" method="POST">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border-gray-300 dark:border-neutral-700 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                    placeholder="Search..."
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-200"
                  >
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.293 12.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 15a7 7 0 100-14 7 7 0 000 14z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            {/* End Search */}

            {/* Recent Articles */}
            <div className="p-4 bg-white rounded-lg shadow-md dark:bg-neutral-900">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                Recent Articles
              </h3>
              <ul className="space-y-3">
                <li className="text-base dark:text-neutral-200">
                  <a
                    href="#"
                    className="block hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Implementing AI in Cloud Management
                  </a>
                </li>
                <li className="text-base dark:text-neutral-200">
                  <a
                    href="#"
                    className="block hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Building Scalable Infrastructure with Kubernetes
                  </a>
                </li>
                <li className="text-base dark:text-neutral-200">
                  <a
                    href="#"
                    className="block hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Optimizing AWS Lambda Functions
                  </a>
                </li>
              </ul>
            </div>
            {/* End Recent Articles */}

            {/* Newsletter */}
            <div className="p-4 bg-white rounded-lg shadow-md dark:bg-neutral-900">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                Subscribe to Newsletter
              </h3>
              <form action="#" method="POST">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full border-gray-300 dark:border-neutral-700 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-200"
                  >
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 4a2 2 0 012-2h6a2 2 0 012 2v2.586a1 1 0 01-.293.707l-5.293 5.293a1 1 0 01-1.414 0L3.293 7.293A1 1 0 013 6.586V4z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            {/* End Newsletter */}
          </div>
        </div>
        {/* End Sidebar */}
      </div>
    </div>
  );
};

export default BlogArticle;
