import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { API_URL } from 'config';
import router from 'next/router';
import { Fragment, useState } from 'react';
import { Button } from './buttons/Buttons';

export default function Modal({ token, comment }) {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteComment = async (id: string) => {
    await axios.delete(`${API_URL}/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    router.push(router.asPath, undefined, { scroll: false });
    setIsOpen(false);
  };

  return (
    <>
      <a className='cursor-pointer' onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon
          className='my-5 text-light-blue-900 hover:text-light-blue-600'
          icon={faTrash}
        />
      </a>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={() => setIsOpen(false)}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl'>
                <Dialog.Title
                  as='h3'
                  className='text-xl text-left font-medium leading-6 text-light-blue-900'
                >
                  Are you sure?
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-light-blue-900'>
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className='mt-4 min-w-full flex justify-end'>
                  <Button
                    variant='red'
                    onClick={() => {
                      handleDeleteComment(comment.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
