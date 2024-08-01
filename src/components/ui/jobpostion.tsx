import React from 'react';

const CardSection: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {[
          { title: 'Management', positions: '4 job positions' },
          { title: 'App Development', positions: '26 job positions' },
          { title: 'Arts & Entertainment', positions: '9 job positions' },
          { title: 'Accounting', positions: '11 job positions' },
          { title: 'UI Designer', positions: '37 job positions' },
          { title: 'Apps', positions: '2 job positions' },
          { title: 'Content Writer', positions: '10 job positions' },
          { title: 'Analytics', positions: '14 job positions' }
        ].map((card, index) => (
          <a
            key={index}
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    {card.positions}
                  </p>
                </div>
                <div className="ps-3">
                  <svg
                    className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
