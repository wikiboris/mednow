import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import router from 'next/router';
import { SyntheticEvent, useState } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(`/search/?term=${searchTerm}&page=1`);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSearch} className='relative mb-4'>
      <div className='absolute top-4 left-3'>
        <FontAwesomeIcon
          icon={faSearch}
          className='text-blue-gray-400 z-20 hover:text-blue-gray-500'
        />
      </div>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='h-14 min-w-full pl-10 rounded-lg z-0 shadow focus:shadow focus:outline-none placeholder-blue-gray-400'
        placeholder='Search anything...'
      />
    </form>
  );
}
