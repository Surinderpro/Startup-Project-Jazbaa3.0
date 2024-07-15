import React from 'react';
import Link from "next/link";
const TeamSection: React.FC = () => {
  return (
    <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our team</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">Creative people</p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12">
        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/devang.jpg" alt="David Forren" />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 dark:text-neutral-200">Devang Kubde</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400">Founder / CEO</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/surinder.jpg" alt="Amil Evara" />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 dark:text-neutral-200">Surinder Jungral</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400">Co-Founder and CTO</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/avdesh.jpg" alt="Ebele Egbuna" />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 dark:text-neutral-200">Avdesh Kalra</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400">Support Consultant</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/gungun.jpg" alt="Maria Powers" />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 dark:text-neutral-200">Gungun Matha</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400">Director of Sales</p>
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}

      {/* Card */}
      <div className="mt-12 flex justify-center">
        <div className="border border-gray-200 py-2 px-3 rounded-full dark:border-neutral-700">
          <div className="flex items-center gap-x-3">
            <span className="text-sm text-gray-500 dark:text-neutral-500">Want to work with us?</span>
            <Link href={"/contacti"}
            className="inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-600">
                We are hiring
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div>
  );
};

export default TeamSection;
