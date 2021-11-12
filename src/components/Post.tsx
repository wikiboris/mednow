import { API_URL } from 'config';
import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div
      key={post.id}
      className='flex flex-col bg-white border rounded-lg overflow-hidden mb-8'
    >
      <Link href={`/posts/${post.slug}`}>
        <div className='group h-48 md:h-64 block bg-gray-100 overflow-hidden relative cursor-pointer'>
          <img
            src={post.image ? `${post.image.formats.large.url}` : '/sample.jpg'}
            loading='lazy'
            alt='Photo by Minh Pham'
            className='w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200'
          />
        </div>
      </Link>

      <div className='flex flex-col flex-1 p-4 sm:p-6'>
        <h2 className='text-light-blue-900 text-lg font-semibold mb-2'>
          <a
            href='#'
            className='hover:text-light-blue-700 active:text-indigo-600 transition duration-100'
          >
            {post.title}
          </a>
        </h2>

        <p className='text-light-blue-900 mb-8 line-clamp-3'>
          {post.short_description}
        </p>

        <div className='flex justify-between items-end mt-auto'>
          <span className='text-light-blue-900 text-sm border rounded px-2 py-1'>
            {post.category ? post.category.name : 'sample'}
          </span>
        </div>
      </div>
    </div>
  );
}
