"use client";
import React, { useState } from 'react';
import Link from "next/link";
const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
    // Add your logic for accepting cookies
  };

  const handleManage = () => {
    setVisible(false);
    // Add your logic for managing cookies
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 end-0 z-[60] sm:max-w-xl w-full mx-auto p-6">
      <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800">
        <div className="flex gap-x-5">
          <svg
            className="hidden sm:block flex-shrink-0 w-20"
            width="72"
            height="63"
            viewBox="0 0 72 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG paths */}
          </svg>
          <div className="grow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              We are using cookies to improve your experience!
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              By clicking "Allow all", you agree to use of all cookies. Visit our{' '}
              <Link href={"/cookiepolicy"}
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
              >
                Cookies Policy
              </Link>
              to learn more.
            </p>
            <div className="mt-5 inline-flex gap-x-2">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleAccept}
              >
                Allow all
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                onClick={handleManage}
              >
                Reject all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
