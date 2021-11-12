import { useEffect, useState } from 'react';
import { Button } from './buttons/Buttons';
import Link from 'next/link';
import { ListCategories } from './ListBox';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { logout } from '~/reducers/authReducers';
import { Transition } from '@headlessui/react';

export const Header = ({ blue = false }: { blue?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { user, error } = useAppSelector((state) => state.authLogin);
  const dispatch = useAppDispatch();

  return (
    <motion.div
      animate={{
        y: 0,
        opacity: 1,
      }}
      className={`min-w-full ${!blue ? '' : 'mb-10'}`}
      initial={{ opacity: blue ? 1 : 0, y: blue ? 0 : -5 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
    >
      <div className='relative grid items-center grid-cols-2 lg:grid-cols-3 my-6 z-20'>
        <div
          aria-label='Medknow'
          title='Medknow'
          className='inline-flex items-center '
        >
          <svg
            width='30'
            height='30'
            fill={!blue ? 'white' : '#0091ea'}
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            viewBox='0 0 24 24'
          >
            <path d='M21.826 9h-2.086c.171-.487.262-.957.262-1.41 0-2.326-1.818-3.776-4.024-3.573-2.681.247-4.518 3.71-4.978 4.484-.527-.863-2.261-4.238-4.981-4.494-2.11-.199-4.019 1.181-4.019 3.582 0 3.109 4.347 7.084 9.001 11.615 1.16-1.127 2.285-2.208 3.324-3.243l.97 1.857c-1.318 1.302-2.769 2.686-4.294 4.181-6.164-6.037-11.001-10.202-11.001-14.403 0-3.294 2.462-5.526 5.674-5.596 2.163-.009 4.125.957 5.327 2.952 1.177-1.956 3.146-2.942 5.253-2.942 3.064 0 5.746 2.115 5.746 5.595 0 .464-.06.928-.174 1.395zm-11.094 4c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1h1.222l1.88-2.71c.14-.202.376-.315.622-.299.245.016.464.161.576.38l2.27 4.437.813-1.45c.124-.221.357-.358.611-.358h5.274v2h-4.513l-1.759 2.908c-.132.219-.373.348-.629.337-.255-.01-.484-.16-.598-.389l-2.256-4.559-.989 1.406c-.131.186-.345.297-.573.297h-1.951z' />
          </svg>

          <Link href='/'>
            <a
              className={`ml-3 lg:text-xl font-bold tracking-wide ${
                !blue ? 'text-white' : 'text-light-blue-900'
              } uppercase`}
            >
              mednow
            </a>
          </Link>
        </div>

        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <Link href='/'>
              <a
                aria-label='Our product'
                title='Our product'
                className={`font-medium tracking-wide ${
                  !blue
                    ? 'text-white hover:text-accent'
                    : 'text-light-blue-900 hover:text-light-blue-600'
                }  transition-colors duration-200 `}
              >
                News
              </a>
            </Link>
          </li>

          <li>
            <ListCategories
              items={[
                { name: 'Klbz', link: '/profile', category: 'Arthrology' },
                { name: 'Klbz', link: '/profile', category: 'Arthrology' },
                { name: 'Profile', link: '/profile', category: 'Arthrology' },
                { name: 'Profile', link: '/profile', category: 'Arthrology' },

                { name: 'fdbfd', link: '/profile', category: 'Neurology' },
                { name: 'Klfdbbfbz', link: '/profile', category: 'Neurology' },

                { name: 'fsdbbfsdfb', link: '/profile', category: 'Neurology' },
                { name: 'sfbbfsfsb', link: '/profile', category: 'Neurology' },

                {
                  name: 'Settings',
                  link: '/settings',
                  category: 'Cardiology',
                },
                {
                  name: 'Diet',
                  link: '/settings',
                  category: 'Cardiology',
                },
                {
                  name: 'Cardiac health',
                  link: '/settings',
                  category: 'Cardiology',
                },
                {
                  name: 'Cardiac health',
                  link: '/settings',
                  category: 'Cardiology',
                },
              ]}
              categories={[
                { name: 'Arthrology' },
                { name: 'Cardiology' },
                { name: 'Neurology' },
              ]}
              blue={blue}
              buttonName='Diseases'
            />
          </li>

          <li>
            <ListCategories
              items={[
                { name: 'Klbz', link: '/profile', category: 'Arthrology' },
                { name: 'Klbz', link: '/profile', category: 'Arthrology' },
                { name: 'Profile', link: '/profile', category: 'Arthrology' },
                { name: 'Profile', link: '/profile', category: 'Arthrology' },

                { name: 'fdbfd', link: '/profile', category: 'Neurology' },
                { name: 'Klfdbbfbz', link: '/profile', category: 'Neurology' },

                { name: 'fsdbbfsdfb', link: '/profile', category: 'Neurology' },
                { name: 'sfbbfsfsb', link: '/profile', category: 'Neurology' },

                {
                  name: 'Settings',
                  link: '/settings',
                  category: 'Cardiology',
                },
                {
                  name: 'Diet',
                  link: '/settings',
                  category: 'Cardiology',
                },
                {
                  name: 'Cardiac health',
                  link: '/settings',
                  category: 'Cardiology',
                },
                {
                  name: 'Cardiac health',
                  link: '/settings',
                  category: 'Cardiology',
                },
              ]}
              categories={[
                { name: 'Arthrology' },
                { name: 'Cardiology' },
                { name: 'Neurology' },
              ]}
              blue={blue}
              buttonName='Drugs'
            />{' '}
          </li>
          <li>
            <Link href='/'>
              <a
                aria-label='Our product'
                title='Our product'
                className={`font-medium tracking-wide ${
                  !blue
                    ? 'text-white hover:text-accent'
                    : 'text-light-blue-900 hover:text-light-blue-600'
                }  transition-colors duration-200 `}
              >
                Academy
              </a>
            </Link>
          </li>
        </ul>
        <ul className='items-center hidden ml-auto space-x-1 lg:flex'>
          {error && <h1>{error.data.message}</h1>}
          {!user && (
            <>
              <li>
                <motion.div
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  initial={{ opacity: blue ? 1 : 0, scale: blue ? 1 : 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 60,
                  }}
                >
                  <Link href='/account/login'>
                    <Button
                      variant='white'
                      aria-label='Sign in'
                      title='Sign in'
                      className='flex relative items-center justify-center'
                    >
                      Sign in
                    </Button>
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  initial={{ opacity: blue ? 1 : 0, scale: blue ? 1 : 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.6,
                    type: 'spring',
                    stiffness: 60,
                  }}
                >
                  <Link href='/account/register'>
                    <Button variant='blue' aria-label='Sign up' title='Sign up'>
                      <span>Sign up</span>
                    </Button>
                  </Link>
                </motion.div>
              </li>
            </>
          )}
          {user && (
            <>
              <li className='mx-8 text-light-blue-900'>
                <motion.div
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  initial={{ opacity: blue ? 1 : 0, scale: blue ? 1 : 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.6,
                    type: 'spring',
                    stiffness: 60,
                  }}
                >
                  Welcome{' '}
                  <span className='font-semibold'>{user.username}!</span>
                </motion.div>
              </li>
              <li>
                <motion.div
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  initial={{ opacity: blue ? 1 : 0, scale: blue ? 1 : 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.6,
                    type: 'spring',
                    stiffness: 60,
                  }}
                >
                  <Button
                    onClick={() => {
                      dispatch(logout());
                    }}
                    variant='blue'
                    aria-label='Sign up'
                    title='Sign up'
                  >
                    Logout
                  </Button>
                </motion.div>
              </li>
            </>
          )}
        </ul>
        <div className='ml-auto lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className={`p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline ${
              !blue
                ? 'hover:bg-light-blue-900 focus:bg-bg-light-blue-900'
                : 'hover:bg-blue-50 focus:bg-blue-50'
            }`}
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              className={`w-5 ${!blue ? 'text-white' : 'text-light-blue-900'}`}
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          <Transition
            show={isMenuOpen}
            enter='transition-opacity duration-25'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-25'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <motion.div
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
              }}
              initial={{ opacity: blue ? 1 : 0, scale: 0.4, y: -120, x: 100 }}
              transition={{
                type: 'tween',
                delay: 0.1,
              }}
              className='absolute top-0 left-0 w-full'
            >
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='inline-flex items-center'>
                    <svg
                      width='50'
                      height='40'
                      fill='#1e88e5'
                      xmlns='http://www.w3.org/2000/svg'
                      fillRule='evenodd'
                      clipRule='evenodd'
                      viewBox='0 0 24 24'
                    >
                      <path d='M21.826 9h-2.086c.171-.487.262-.957.262-1.41 0-2.326-1.818-3.776-4.024-3.573-2.681.247-4.518 3.71-4.978 4.484-.527-.863-2.261-4.238-4.981-4.494-2.11-.199-4.019 1.181-4.019 3.582 0 3.109 4.347 7.084 9.001 11.615 1.16-1.127 2.285-2.208 3.324-3.243l.97 1.857c-1.318 1.302-2.769 2.686-4.294 4.181-6.164-6.037-11.001-10.202-11.001-14.403 0-3.294 2.462-5.526 5.674-5.596 2.163-.009 4.125.957 5.327 2.952 1.177-1.956 3.146-2.942 5.253-2.942 3.064 0 5.746 2.115 5.746 5.595 0 .464-.06.928-.174 1.395zm-11.094 4c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1h1.222l1.88-2.71c.14-.202.376-.315.622-.299.245.016.464.161.576.38l2.27 4.437.813-1.45c.124-.221.357-.358.611-.358h5.274v2h-4.513l-1.759 2.908c-.132.219-.373.348-.629.337-.255-.01-.484-.16-.598-.389l-2.256-4.559-.989 1.406c-.131.186-.345.297-.573.297h-1.951z' />
                    </svg>
                    <Link href='/'>
                      <span className='ml-2 text-xl font-medium tracking-wide text-primary-focus uppercase'>
                        Mednow
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition  duration-200 rounded hover:bg-blue-50 focus:bg-blue-100 focus:outline-none'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-primary' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <a
                        href='/'
                        aria-label='Our product'
                        title='Our product'
                        className='font-medium tracking-wide text-light-blue-900 transition-colors duration-200 hover:text-accent'
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href='/'
                        aria-label='Our product'
                        title='Our product'
                        className='font-medium tracking-wide text-light-blue-900 transition-colors duration-200 hover:text-accent'
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href='/'
                        aria-label='Product pricing'
                        title='Product pricing'
                        className='font-medium tracking-wide text-light-blue-900 transition-colors duration-200 hover:text-accent'
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <Link href='/account/login'>
                        <Button
                          filled={false}
                          variant='blue'
                          aria-label='Sign in'
                          title='Sign in'
                          className='inline-flex items-center justify-center w-full'
                        >
                          Sign in
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link href='/account/register'>
                        <Button
                          variant='blue'
                          aria-label='Sign up'
                          title='Sign up'
                          className='inline-flex items-center justify-center w-full'
                        >
                          Sign up
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          </Transition>
        </div>
      </div>
    </motion.div>
  );
};
