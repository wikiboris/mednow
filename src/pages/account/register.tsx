import Layout from '../../components/Layout';
import Link from 'next/link';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import router from 'next/router';
import { register } from '~/reducers/authReducers';
import StaticWrapper from '~/components/StaticWrapper';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { user } = useAppSelector((state) => state.authLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('password didnt match');
    } else {
      dispatch(register({ email, username: name, password }));
    }
  };
  if (!user) {
    return (
      <Layout>
        <StaticWrapper>
          <motion.div
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{ opacity: 0, y: -5 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
            className='max-w-screen-2xl px-4 mb-24 min-w-full md:px-8 mx-auto'
          >
            <motion.div
              animate={{
                y: 0,
                opacity: 1,
              }}
              initial={{ opacity: 0, y: -5 }}
              transition={{ delay: 0.13, type: 'spring', stiffness: 300 }}
            >
              <h2 className='text-light-blue-900 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8'>
                Sign up
              </h2>
            </motion.div>

            <form
              className='max-w-lg border rounded-lg mx-auto'
              onSubmit={handleSubmit}
            >
              <div className='flex flex-col gap-4 p-4 md:p-8'>
                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 300 }}
                >
                  <label
                    htmlFor='email'
                    className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    name='email'
                    className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-300 rounded outline-none transition duration-100 px-3 py-2'
                  />
                </motion.div>
                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  transition={{ delay: 0.16, type: 'spring', stiffness: 300 }}
                >
                  <label
                    htmlFor='text'
                    className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
                  >
                    Name
                  </label>
                  <input
                    name='name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-300 rounded outline-none transition duration-100 px-3 py-2'
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  transition={{ delay: 0.17, type: 'spring', stiffness: 300 }}
                >
                  <label
                    htmlFor='password'
                    className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
                  >
                    Password
                  </label>
                  <input
                    name='password'
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-300 rounded outline-none transition duration-100 px-3 py-2'
                  />
                </motion.div>
                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  transition={{ delay: 0.18, type: 'spring', stiffness: 300 }}
                >
                  <label
                    htmlFor='password'
                    className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
                  >
                    Password again
                  </label>
                  <input
                    name='confirmPassword'
                    required
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-300 rounded outline-none transition duration-100 px-3 py-2'
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  transition={{ delay: 0.19, type: 'spring', stiffness: 300 }}
                >
                  <button className='min-w-full block bg-primary hover:bg-accent active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'>
                    Sign up
                  </button>
                </motion.div>
              </div>

              <motion.div
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                initial={{ opacity: 0, y: -5 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                className='flex justify-center items-center bg-gray-100 p-4'
              >
                <p className='text-blue-gray-300 text-sm text-center'>
                  Have an account?{' '}
                  <Link href='/account/login'>
                    <a className='text-light-blue-900 hover:text-light-blue-700 active:text-teal-700 transition duration-100'>
                      Login
                    </a>
                  </Link>
                </p>
              </motion.div>
            </form>
          </motion.div>
        </StaticWrapper>
      </Layout>
    );
  } else {
    return null;
  }
}
