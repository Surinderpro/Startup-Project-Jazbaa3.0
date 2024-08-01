"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Retrieve user info from local storage or cookies
    const storedUser = localStorage.getItem('user'); // Replace with cookie logic if needed
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSignOut = () => {
    // Clear user session
    localStorage.removeItem('user'); // Replace with cookie logic if needed
    setUser(null);
    router.push('/signin'); // Redirect to sign-in page
  };

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          {/* Logo */}
          <a
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Logo"
          >
            <img src="/logo.png" alt="Logo" className="w-28 h-auto" />
          </a>
          {/* End Logo */}
        </div>

        {/* Button Group */}
        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          {user ? (
            <>
              <span className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black dark:border-neutral-700 dark:text-white">
                Welcome, {user}
              </span>
              <button
                onClick={handleSignOut}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-red-400 text-black hover:bg-red-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-red-500"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500"
              >
                Sign up
              </Link>
            </>
          )}

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* End Button Group */}

        {/* Collapse */}
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <Link
                href="/"
                className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                href="/About"
                className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                href="/Teammate"
                className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              >
                Our Team
              </Link>
            </div>
            <div>
              <Link
                href="/contacti"
                className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <Link
                href="/Blog"
                className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
};

export default Header;
