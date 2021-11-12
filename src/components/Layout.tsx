import Head from 'next/head';
import { useEffect } from 'react';
import { useAppDispatch } from '~/app/hooks';
import { checkUserLoggedIn } from '~/reducers/authReducers';

type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
};

export default function Layout({
  title = 'Sample',
  keywords = 'blog',
  description = 'sample',
  children,
}: LayoutProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkUserLoggedIn());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      {children}
    </>
  );
}
