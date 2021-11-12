import Footer from './Footer';
import { Header } from './Header';

export default function StaticWrapper({
  children,
}: {
  children: React.ReactChild;
}) {
  return (
    <>
      <div className='flex flex-col justify-between items-center min-h-screen px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <Header blue />

        {children}
        <Footer />
      </div>
    </>
  );
}
