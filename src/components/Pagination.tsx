import Link from 'next/link';

export default function Pagination({
  lastPage,
  term = '',
  page,
  search = false,
}) {
  return (
    <div>
      {Array.from({ length: lastPage }, (v, k) => k + 1).map((element) => {
        return (
          <Link
            href={`${
              !search
                ? '/feed?page=' + element
                : '/search?term=' + term + '&page=' + element
            }`}
          >
            <nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'>
              <a
                className={`${
                  page === element
                    ? 'bg-primary text-white hover:bg-accent'
                    : 'bg-white text-light-blue-900'
                } cursor-pointer border-gray-200 hover:bg-primary hover:text-white relative rounded-lg inline-flex items-center px-4 py-2 border text-sm font-medium`}
              >
                {element}
              </a>
            </nav>
          </Link>
        );
      })}
    </div>
  );
}
