import { API_URL } from 'config';
import { useEffect, useRef, useState } from 'react';
import { Button } from '~/components/buttons/Buttons';
import StaticWrapper from '~/components/StaticWrapper';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import router from 'next/router';
import { Editor } from '@tinymce/tinymce-react';

export default function AddPage({ token }) {
  const [values, setValues] = useState<{
    title: string;
    short_description: string;
  }>({ title: '', short_description: '' });

  const editorRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileChange = async (files) => {
    const formData = new FormData();
    formData.append('files', files[0]);
    formData.append('ref', 'posts');
    formData.append('field', 'image');

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    console.log(res);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      alert('Please fill in all fields');
      return;
    }

    const res = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...values,
        description: editorRef.current.getContent(),
        slug: values.title,
      }),
    });

    if (!res.ok) {
      console.log(res);
      if (res.status === 403 || res.status === 401) {
        alert('No token included');
        return;
      }
      alert('Something Went Wrong');
    } else {
      const post = await res.json();
      router.push(`/posts/${post.slug}`);
    }
  };
  return (
    <StaticWrapper>
      <div className='mb-20'>
        <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <div className='mb-10 md:mb-16'>
            <h2 className='text-light-blue-900 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
              Get in touch
            </h2>

            <p className='max-w-screen-md text-light-blue-900 md:text-lg text-center mx-auto'>
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <form className='max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto'>
            <div className='sm:col-span-2'>
              <label
                htmlFor='first-name'
                className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
              >
                Title*
              </label>
              <input
                value={values.title}
                onChange={handleInputChange}
                name='title'
                className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-700 rounded outline-none transition duration-100 px-3 py-2'
              />
            </div>

            <div className='sm:col-span-2'>
              <input
                type='file'
                onChange={(e) => handleFileChange(e.target.files)}
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='company'
                className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
              >
                Short description*
              </label>
              <input
                value={values.short_description}
                onChange={handleInputChange}
                name='short_description'
                className='w-full bg-gray-50 text-light-blue-900 border focus:ring ring-light-blue-700 rounded outline-none transition duration-100 px-3 py-2'
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='inline-block text-light-blue-900 text-sm sm:text-base mb-2'
              >
                Description
              </label>
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue='<p>This is the initial content of the editor.</p>'
                apiKey='oh6tno1nizg48lgv6dh05xagjisartzm514wmskly7yrjxd1'
                init={{
                  height: 500,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    'link image code',
                  ],
                  toolbar:
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                }}
              />
            </div>

            <div className='sm:col-span-2 flex justify-between items-center'>
              <Button type='submit' value='Add Post' onClick={handleSubmit}>
                Send
              </Button>
              <span className='text-gray-500 text-sm'>*Required</span>
            </div>

            <p className='text-gray-400 text-xs'>
              By signing up to our newsletter you agree to our{' '}
              <a
                href='#'
                className='hover:text-indigo-500 active:text-indigo-600 underline transition duration-100'
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </StaticWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { token } = parseCookies(req);

  return {
    props: { token },
  };
};
