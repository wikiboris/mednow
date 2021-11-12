import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { useAppSelector } from '~/app/hooks';
import { Button } from '~/components/buttons/Buttons';
import Layout from '~/components/Layout';
import StaticWrapper from '~/components/StaticWrapper';

export default function ProfilePage() {
  const { user, loading, error } = useAppSelector((state) => state.authLogin);

  useEffect(() => {
    if (!user || loading) {
      router.push('/');
    }
  }, [user]);
  return (
    <>
      {user && (
        <Layout>
          <StaticWrapper>
            <div>
              <h2 className='text-light-blue-900 text-center text-2xl lg:text-3xl font-bold mb-4 md:mb-8'>
                Edit Profile
              </h2>
              <div className='mb-28 max-w-2xl flex flex-col items-center px-20 py-8 border rounded-xl mx-auto'>
                <div className='sm:col-span-2 mb-2'>
                  <label
                    htmlFor='first-name'
                    className='text-light-blue-900 text-sm sm:text-2xl mb-2'
                  >
                    <div className='flex items-center justify-center flex-col'>
                      <img
                        src={user.picture}
                        alt='Profile picture'
                        className=' hover:opacity-75 cursor-pointer p-2 border-r-2 border-blue-gray-50 rounded-full h-48 w-48'
                      />
                      <p className='my-2 relative'>
                        {user.username}
                        <FontAwesomeIcon
                          className='text-light-blue-900 hover:text-light-blue-700 mx-2 absolute top-1.5 cursor-pointer opacity-75 '
                          style={{ width: '15px' }}
                          icon={faPencilAlt}
                        />
                      </p>
                    </div>
                  </label>
                </div>

                <form className='max-w-screen-lg grid sm:grid-cols-2 gap-4 mx-auto'>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='first-name'
                      className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
                    >
                      Username
                    </label>
                    <input
                      name='first-name'
                      className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-600 rounded outline-none transition duration-100 px-3 py-2'
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='first-name'
                      className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
                    >
                      Email
                    </label>
                    <input
                      name='first-name'
                      className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-600 rounded outline-none transition duration-100 px-3 py-2'
                    />
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='email'
                      className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
                    >
                      Password
                    </label>
                    <input
                      name='email'
                      className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-600 rounded outline-none transition duration-100 px-3 py-2'
                    />
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='subject'
                      className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
                    >
                      Password again
                    </label>
                    <input
                      name='subject'
                      className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-600 rounded outline-none transition duration-100 px-3 py-2'
                    />
                  </div>

                  <div className='sm:col-span-2 flex flex-col items-center'>
                    <Button className='min-w-full'>Update</Button>
                  </div>
                  <div className='sm:col-span-2 '>
                    <p className='text-light-blue-900  text-xs'>
                      By signing up to our newsletter you agree to our{' '}
                      <a
                        href='#'
                        className='hover:text-light-blue-900 active:text-indigo-600 underline transition duration-100'
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </StaticWrapper>
        </Layout>
      )}
    </>
  );
}
