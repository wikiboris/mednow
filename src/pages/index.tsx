import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import DynamicWrapper from '~/components/DynamicWrapper';
import { Faq } from '~/components/Faq';
import Footer from '~/components/Footer';
import Hero from '~/components/Hero';
import Layout from '~/components/Layout';
import Newsletter from '~/components/Newsletter';
import Posts from '~/components/Posts';

export const Home = (): JSX.Element => (
  <Layout>
    <DynamicWrapper>
      <Hero />
    </DynamicWrapper>
    <div className='px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <Posts />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { token } = parseCookies(req);

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: '/feed',
      },
    };
  }
  return {
    props: {},
  };
};

export default Home;
