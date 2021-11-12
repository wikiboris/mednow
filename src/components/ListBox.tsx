import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import GalleryHeader from './GalleryHeader';
import { Fragment } from 'react';

type MyLinkProps = {
  href: string;
  children: React.ReactNode;
};

type ListCategoriesProps = {
  items: {
    name: string;
    link: string;
    category: 'Arthrology' | 'Cardiology' | 'Neurology';
  }[];
  categories: { name: string; link?: string }[];
  buttonName: string;
  blue: boolean;
};

function MyLink({ href, children }: MyLinkProps) {
  return (
    <Link href={href}>
      <a
        className='            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-light-blue-900
            hover:text-light-blue-600
'
      >
        {children}
      </a>
    </Link>
  );
}

export function ListCategories({
  items,
  buttonName,
  blue,
  categories,
}: ListCategoriesProps) {
  return (
    <Menu>
      <Menu.Button
        className={`font-medium focus:outline-none flex tracking-wide ${
          !blue
            ? 'text-white hover:text-accent'
            : 'text-light-blue-900 hover:text-light-blue-600'
        }  transition-colors duration-200 flex-row items-center cursor-pointer `}
        aria-label='Our product'
        title='Our product'
      >
        {buttonName}
        <FontAwesomeIcon
          style={{ maxWidth: '6px' }}
          size='lg'
          className='mx-1 pt-1'
          icon={faChevronDown}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items
          className='          bg-white
          text-lg
          z-50
          float-left
          origin-top
          left-12
          list-none
          divide-x-2 divide-blue-50
          text-left
          rounded
          flex
          2xl:flex-row
          xl:flex-col
          lg:flex-col
          2xl:divide-x-2 divide-blue-50
          xl:divide-y-2 divide-blue-50
          lg:divide-y-2 divide-blue-50
          shadow-lg
          mt-1
          '
          style={{ minWidth: '12rem', position: 'absolute' }}
        >
          <div className='flex flex-col py-2 px-4 justify-between '>
            <div className='flex '>
              {categories.map((category, index) => {
                return (
                  <div key={category.name + index} className='py-2 mb-4 mr-10'>
                    <h1
                      className='
                              text-sm
                                py-2
                                pb-4
                                text-light-blue-900
                                px-4
                                font-bold
                                block
                                w-full
                                whitespace-nowrap
                                uppercase'
                    >
                      {category.name}
                    </h1>
                    {items.map((item, index) => {
                      if (item.category === category.name) {
                        return (
                          <Menu.Item key={item.name + index}>
                            <MyLink href={item.link}>{item.name}</MyLink>
                          </Menu.Item>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
            <div className='flex flex-col mb-3 '>
              <a
                href='/'
                className='         text-sm
                max-w-max
                                py-4
                                text-light-blue-900
                                hover:text-accent
                                font-semibold
                                mx-4
                                block
                                whitespace-nowrap
                                '
              >
                <span>Explore more categories</span>{' '}
                <FontAwesomeIcon style={{ width: '7px' }} icon={faArrowRight} />
              </a>
              <a
                href='/'
                className='         text-sm
                                py-4
                                max-w-max
                                text-light-blue-900
                                hover:text-accent
                                font-semibold
                                mx-4
                                block
                                whitespace-nowrap
                                '
              >
                <span>Find the best medicine articles</span>{' '}
                <FontAwesomeIcon style={{ width: '7px' }} icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className='flex flex-col bg-gray-50 rounded'>
            <GalleryHeader />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
