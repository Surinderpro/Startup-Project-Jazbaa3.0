import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-4xl mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Multi-Cloud Infrastructure Management
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Deploy and manage cloud resources across AWS, Azure, and Google Cloud seamlessly.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.5 4.27 16.5 9.42M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16ZM3.3 7 12 12M21 16v2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  DevOps Automation
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Automate software development, testing, and deployment processes for enhanced efficiency.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Real-Time Monitoring
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Monitor system performance and health in real-time to ensure optimal operation.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}

          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  AI-Driven Solutions
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Utilize AI to optimize workflows, predict trends, and automate routine tasks for productivity.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="7" r="4" />
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Strategic Consulting
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Guide your business with expert advice on cloud strategy, DevOps practices, and digital transformation.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex">
              <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 10v12M15 5.88L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Scalable Solutions
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Scale your infrastructure effortlessly with solutions tailored to your growth and operational needs.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default ServicesPage;
