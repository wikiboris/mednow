import axios from 'axios';
import { API_URL } from 'config';
import { GetServerSideProps } from 'next';
import Layout from '~/components/Layout';
import StaticWrapper from '~/components/StaticWrapper';
import DOMPurify from 'isomorphic-dompurify';
import { Button } from '~/components/buttons/Buttons';
import router from 'next/router';
import { useState, SyntheticEvent } from 'react';
import { useAppSelector } from '~/app/hooks';
import { parseCookies } from 'nookies';
import Modal from '~/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretSquareDown,
  faCaretSquareUp,
} from '@fortawesome/free-solid-svg-icons';
import { Transition } from '@headlessui/react';

type PostProps = {
  post: {
    id: string;
    title: string;
    description: string;
    image: {
      formats: {
        large: {
          url: string;
        };
      };
    };
    category: {
      name: string;
    };
    short_description: string;
    comments: {
      content: string;
      published_at: Date;
      user: {
        id: string;
        picture: string;
        username: string;
      };
    }[];
  };
  token: string;
};

export default function PostPage({ post, token }: PostProps) {
  const content = DOMPurify.sanitize(post.description);
  const { user } = useAppSelector((state) => state.authLogin);
  const [value, setValue] = useState<string>('');
  const [numberOfComments, setNumberOfComments] = useState<number>(3);
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const handlerSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!value) {
      alert('Please fill in all fields');
      return;
    }

    const res = await axios.post(
      `${API_URL}/comments`,
      { user: user.id, post: post.id, content: value },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      setValue('');
      router.push(router.asPath, undefined, { scroll: false });
    }
  };

  return (
    <Layout>
      <StaticWrapper>
        <>
          <div className='max-w-screen-md px-4 md:px-8 mx-auto mb-24'>
            <h1 className='text-light-blue-800 text-lg sm:text-lg font-medium uppercase'>
              {post.category.name}
            </h1>
            <h1 className='text-light-blue-900 text-5xl sm:text-5xl font-bold my-3'>
              {post.title}
            </h1>
            <h1 className='text-gray-800 text-xl mt-5 sm:text-xl'>
              {post.short_description}
            </h1>

            <img src={`${post.image.formats.large.url}`} className='my-8 ' />

            <div dangerouslySetInnerHTML={{ __html: content }} />
            <hr className='mb-10 mt-16' />
            <div>
              {post.comments.length === 0 ? (
                <h1 className='text-blue-gray-200 text-2xl sm:text-2xl font-bold text-center mb-4 md:mb-6'>
                  There is no comments
                </h1>
              ) : (
                <>
                  <h1 className='text-light-blue-900 text-2xl sm:text-2xl font-bold mb-4 md:mb-10'>
                    Comments
                  </h1>
                  {post.comments
                    .sort(
                      (a, b) =>
                        new Date(b.published_at).getTime() -
                        new Date(a.published_at).getTime()
                    )
                    .map((comment, index) => (
                      <>
                        {index > 2 ? (
                          <Transition
                            show={isShowing}
                            enter='transition-opacity duration-75'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition-opacity duration-150'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <div className='flex flex-col my-4 p-4 py-6 flex-1 border-2 border-blue-50 rounded-lg '>
                              <div className='flex justify-between gap-2'>
                                <div className='flex flex-row'>
                                  <div className='w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden'>
                                    <img
                                      src={`https://eu.ui-avatars.com/api/?background=01579b&color=fff&name=${comment.user.username}`}
                                      loading='lazy'
                                      alt='Photo by Brock Wegner'
                                      className='w-full h-full object-cover object-center'
                                    />
                                  </div>
                                  <div className='mx-4 max-w-sm'>
                                    <span className='text-light-blue-900 font-medium'>
                                      {comment.user.username}
                                    </span>
                                    <p className=' text-sm text-gray-900 leading-6 min-w-full'>
                                      {comment.content}
                                    </p>
                                  </div>
                                </div>
                                <div className='flex flex-col items-end'>
                                  <p className='text-light-blue-900 text-xs'>
                                    {new Date(
                                      comment.published_at
                                    ).toLocaleString('sk-SK')}
                                  </p>
                                  {comment.user.id === user?.id ? (
                                    <Modal token={token} comment={comment} />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </Transition>
                        ) : (
                          <div className='flex flex-col my-4 p-4 py-6 flex-1 border-2 border-blue-50 rounded-lg '>
                            <div className='flex justify-between gap-2'>
                              <div className='flex flex-row'>
                                <div className='w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden'>
                                  <img
                                    src={`https://eu.ui-avatars.com/api/?background=01579b&color=fff&name=${comment.user.username}`}
                                    loading='lazy'
                                    alt='Photo by Brock Wegner'
                                    className='w-full h-full object-cover object-center'
                                  />
                                </div>
                                <div className='mx-4 max-w-sm'>
                                  <span className='text-light-blue-900 font-medium'>
                                    {comment.user.username}
                                  </span>
                                  <p className=' text-sm text-gray-900 leading-6 min-w-full'>
                                    {comment.content}
                                  </p>
                                </div>
                              </div>
                              <div className='flex flex-col items-end'>
                                <p className='text-light-blue-900 text-xs'>
                                  {new Date(
                                    comment.published_at
                                  ).toLocaleString('sk-SK')}
                                </p>
                                {comment.user.id === user?.id ? (
                                  <Modal token={token} comment={comment} />
                                ) : null}
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                  <div className='min-w-full flex flex-row justify-center'>
                    {numberOfComments < post.comments.length ? (
                      <FontAwesomeIcon
                        icon={faCaretSquareDown}
                        size={'lg'}
                        className='text-light-blue-900 cursor-pointer'
                        onClick={() => {
                          setIsShowing(true);
                          setNumberOfComments(
                            numberOfComments + post.comments.length
                          );
                        }}
                      />
                    ) : post.comments.length > 3 ? (
                      <FontAwesomeIcon
                        icon={faCaretSquareUp}
                        size={'lg'}
                        className='text-light-blue-900 cursor-pointer'
                        onClick={() => {
                          setIsShowing(false);
                          setNumberOfComments(3);
                        }}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </>
              )}
            </div>
            <hr className='mt-10 mb-4' />
            <div className='flex flex-col justify-center'>
              {token ? (
                <form
                  onSubmit={handlerSubmit}
                  className='w-full max-w-full bg-white rounded-lg pt-2'
                >
                  <div className='flex flex-wrap -mx-3'>
                    <h2 className='px-4 pt-3 pb-2 text-light-blue-900 text-lg'>
                      Add a new comment
                    </h2>
                    <div className='w-full md:w-full px-3 mt-2'>
                      <textarea
                        className=' rounded border border-blue-gray-50 leading-normal resize-none w-full h-20 py-2 px-3 placeholder-blue-gray-100 focus:outline-none focus:bg-white'
                        name='body'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder='Type your comment...'
                        required
                      ></textarea>
                    </div>
                    <div className='w-full flex justify-end md:w-full px-3'>
                      <Button variant='blue'>Post comment</Button>
                    </div>
                  </div>
                </form>
              ) : (
                ''
              )}
            </div>
          </div>
        </>
      </StaticWrapper>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const {
    params: { slug },
  } = req;
  const { data } = await axios.get(`${API_URL}/posts?slug=${slug}`);
  const { token } = parseCookies(req);

  if (token) {
    return {
      props: { post: data, token },
    };
  }

  return {
    props: { post: data },
  };
};
