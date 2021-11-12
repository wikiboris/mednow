import { Button } from './buttons/Buttons';

export default function Newsletter() {
  return (
    <div className='my-64 py-8 md:py-12 grid place-content-center px-4 md:px-0'>
      <div className='lg:flex justify-start lg:gap-28'>
        <div>
          <h1 className='font-bold text-3xl text-light-blue-900 mb-7 md:mb-7'>
            Newsletter
          </h1>
          <p className='pt-8 md:pt-4 text-light-blue-900'>
            Sign up for our newsletter and get weekly updates. We only send
            emails about our latest products on the market once a week every
            Friday.
          </p>
          dec
          <div className='mt-8 md:flex justify-start md:gap-4'>
            <input
              type='email'
              placeholder='Your Email'
              className='placeholder-light-blue-900 w-full md:w-1/2 p-4 grid place-items-center border rounded-md focus:outline-none'
            />
            <Button variant='blue' shadow='medium'>
              Subscribe
            </Button>
          </div>
          <p className='pt-4 text-xs text-light-blue-900'>
            Read our{' '}
            <u className='cursor-pointer no-underline hover:underline'>
              privacy policy
            </u>
          </p>
        </div>
        <div className='pt-8 lg:pt-0'>
          <img
            src='undraw_subscribe_vspl.svg'
            alt='illustration for newsletter'
          />
        </div>
      </div>
    </div>
  );
}
