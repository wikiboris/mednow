import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function GalleryHeader() {
  return (
    <div className='w-10/12 px-4 md:px-2 z-50 mx-auto min-w-full'>
      <div className='flex flex-row py-4 mb-4 md:mb-8 px-6'>
        <div className='flex flex-col items-start'>
          <a
            href='#'
            className='group h-20 mr-5 md:h-40 flex w-48 items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative'
          >
            <img
              src='https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600'
              loading='lazy'
              alt='Photo by Minh Pham'
              className='w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200'
            />

            <div className='bg-gradient-to-t from-light-blue-900 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none'></div>
          </a>
          <div className='w-48'>
            <h1
              className='
                              text-sm
                                py-4
                                text-light-blue-900
                                font-bold
                                block
                                w-full
                                whitespace-nowrap
                                uppercase'
            >
              Super VR technologies
            </h1>
            <p
              className='font-normal text-sm text-light-blue-900 mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-h-11
'
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus dignissimos inventore atque sint alias et molestias
              quidem nam sit quo quod, sapiente consequatur sequi ducimus
              dolorum commodi reprehenderit fugiat dicta.
            </p>
            <a
              href='/'
              className='         text-xs
                                py-4
                                hover:text-light-blue-700
                                text-light-blue-900
                                font-extrabold
                                block
                                max-w-max
                                whitespace-nowrap
                                uppercase'
            >
              <span className='mr-1'>Watch Now</span>{' '}
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <a
            href='#'
            className='group h-20 md:h-40 flex w-48  items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative'
          >
            <img
              src='https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600'
              loading='lazy'
              alt='Photo by Magicle'
              className='w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200'
            />

            <div className='bg-gradient-to-t from-light-blue-900 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none'></div>
          </a>
          <div className='w-48'>
            <h1
              className='
                              text-sm
                                py-4
                              text-light-blue-900
                                font-bold
                                block
                                w-full
                                whitespace-nowrap
                                uppercase'
            >
              Medical upgrades
            </h1>
            <p
              className='font-normal text-sm text-light-blue-900 mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-h-11
              '
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus dignissimos inventore atque sint alias et molestias
              quidem nam sit quo quod, sapiente consequatur sequi ducimus
              dolorum commodi reprehenderit fugiat dicta.
            </p>
            <a
              href='/'
              className='         text-xs
                                py-4
                                max-w-max
                                text-light-blue-900
                                hover:text-light-blue-600
                                font-extrabold
                                block
                                whitespace-nowrap
                                uppercase'
            >
              <span className='mr-1'>Watch Now</span>{' '}
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
