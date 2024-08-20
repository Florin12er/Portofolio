// components/Footer.tsx
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h2>
            <div className="flex flex-col space-y-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/blogs">Blogs</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/yourusername" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.884 18.653c-.3-.2-.558-.455-.86-.816a51 51 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.095c-2.968-.726-4.648-2.64-4.648-6.396c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.124 1.937.17 3.415 1.096a11.7 11.7 0 0 1 2.687-.308c.912 0 1.819.104 2.684.308c1.477-.933 2.614-1.227 3.422-1.096q.128.02.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.878.19 1.38c0 .665-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.958c-1.14.227-1.984-.532-1.984-1.525l.002-.447l.005-.705c.005-.707.008-1.337.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.333 4.336-1.482 4.336-4.66c0-.955-.312-1.744-.913-2.404A1 1 0 0 1 17.2 6.19c.166-.414.236-.957.095-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135a9.6 9.6 0 0 0-2.592-.349c-.89 0-1.772.118-2.592.35a1 1 0 0 1-.829-.134c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.045c-.597.655-.913 1.458-.913 2.404c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.202 1.177.545 1.748c-.193.168-.43.732-.43 1.364v3.15c0 .985-.834 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.661-.088-2.254-.485"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="https://twitter.com/yourusername" // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                    <path
                      fill="currentColor"
                      d="M17.817 6.989c-.353-.508-1.297-1.222-2.826-.914c-.892.179-1.425.62-1.764 1.202c-.361.62-.536 1.463-.536 2.444a1 1 0 0 1-1 1c-2.366 0-4.618-.703-6.513-2.604a10.5 10.5 0 0 0-.168 2.34c.053 1.086.312 2.175.927 3.108c.605.917 1.6 1.757 3.264 2.285a1 1 0 0 1 .41 1.655a8.5 8.5 0 0 1-1.796 1.405c1.06.11 2.082.118 3.03.032c1.92-.174 3.449-.723 4.405-1.5c2.013-1.632 3.09-4.066 2.89-8.144c-.034-.67.613-1.393.925-1.942c-.471.088-.943.072-1.248-.367M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404c.626-1.074 1.644-1.864 3.098-2.156c2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502c-1.37 1.112-3.332 1.743-5.485 1.938c-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177c-1.199-.636-2.082-1.468-2.707-2.416c-.868-1.318-1.19-2.788-1.254-4.113S3.141 8 3.343 7.115c.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-300 dark:border-gray-700 pt-4 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sebastian Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {children}
  </Link>
);
