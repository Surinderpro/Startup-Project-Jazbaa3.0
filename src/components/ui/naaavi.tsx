import React from 'react';
import Link from "next/link";

const Naaavi: React.FC = () => {
  // Define colors based on logo analysis
  const skyBlueColor = "#87CEEB";
  const chocolateColor = "#D2691E";

  return (
    <>
      <header className="bg-white border-t-2 border-b-2 border-sky-blue-500"> {/* Added top and bottom border */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-sky-blue-500" href="#">
                <span className="sr-only">Home</span>
                <img src="/logo.jpg" alt="Logo" className="h-20 w-20" />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link href="/About"
                      className="text-chocolate-500 transition hover:text-chocolate-700">About
                    </Link>
                  </li>

                  <li>
                    <a className="text-chocolate-500 transition hover:text-chocolate-700" href="#">
                      Careers
                    </a>
                  </li>

                  <li>
                  <Link href="/Services"
                    className="text-chocolate-500 transition hover:text-chocolate-700">
                      Services
                    </Link>
                  </li>

                  <li>
                  <Link href="/Blog"
                    className="text-chocolate-500 transition hover:text-chocolate-700" >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <img src="/logo.jpg" alt="Menu" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Naaavi;
