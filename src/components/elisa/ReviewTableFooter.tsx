import Link from "next/link";

const ReviewTableFooter = () => {
  return (
    <div>
      <nav
        role="navigation"
        aria-label="pagination"
        className="mx-auto flex w-full justify-center"
      >
        <ul className="flex flex-row items-center gap-1">
          <li className="">
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5"
              aria-label="Go to previous page"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-left h-4 w-4"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              {/* <span>이전</span> */}
            </Link>
          </li>
          <li className="">
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
              href="#"
            >
              1
            </Link>
          </li>
          <li className="">
            <Link
              aria-current="page"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
              href="#"
            >
              2
            </Link>
          </li>
          <li className="">
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
              href="#"
            >
              3
            </Link>
          </li>
          <li className="">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-ellipsis h-4 w-4"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="1"
                ></circle>
                <circle
                  cx="19"
                  cy="12"
                  r="1"
                ></circle>
                <circle
                  cx="5"
                  cy="12"
                  r="1"
                ></circle>
              </svg>
              <span className="sr-only">More pages</span>
            </span>
          </li>
          <li className="">
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5"
              aria-label="Go to next page"
              href="#"
            >
              {/* <span>다음</span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-right h-4 w-4"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ReviewTableFooter;
