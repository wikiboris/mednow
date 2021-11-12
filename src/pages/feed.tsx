import Layout from '~/components/Layout';
import Post from '~/components/Post';
import { GetServerSideProps } from 'next';
import StaticWrapper from '~/components/StaticWrapper';
import axios from 'axios';
import { API_URL, PER_PAGE } from 'config';
import Search from '~/components/Search';
import { PostType } from '~/types/posts';
import Pagination from '~/components/Pagination';

export default function FeedPage({ posts, page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <Layout>
      <StaticWrapper>
        <div className='max-w-full mb-10'>
          <Search />
          <div className='grid grid-cols-3 gap-4 sm:grid-cols-1 lg:grid-cols-3'>
            {posts.map((post: PostType) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
          <div className='flex flex-row min-w-full justify-center'>
            {lastPage === 1 ? (
              ''
            ) : (
              <Pagination page={page} lastPage={lastPage} />
            )}
          </div>
        </div>
      </StaticWrapper>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const { data: totalCount } = await axios.get(`${API_URL}/posts/count`);

  const { data } = await axios.get(
    `${API_URL}/posts?_limit=${PER_PAGE}&_start=${start}`
  );

  return {
    props: { posts: data, page: +page, total: totalCount },
  };
};
