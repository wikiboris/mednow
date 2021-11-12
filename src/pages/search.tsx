import Layout from '~/components/Layout';
import Post from '~/components/Post';
import StaticWrapper from '~/components/StaticWrapper';
import { GetServerSideProps } from 'next';
import { API_URL, PER_PAGE } from 'config';
import axios from 'axios';
import qs from 'qs';
import Search from '~/components/Search';
import { PostType } from '~/types/posts';
import Pagination from '~/components/Pagination';

export default function SearchPage({ posts, page, total, term }) {
  const lastPage = Math.ceil(total.length / PER_PAGE);

  return (
    <Layout>
      <StaticWrapper>
        <div className='max-w-full mb-10'>
          <Search />
          <div className='grid grid-cols-3 gap-4'>
            {posts.length === 0 && <h1>Nothing found</h1>}
            {posts.map((post: PostType) => (
              <Post post={post} />
            ))}
          </div>
          <div className='flex flex-row min-w-full justify-center'>
            {lastPage === 1 ? (
              ''
            ) : (
              <Pagination term={term} search page={page} lastPage={lastPage} />
            )}
          </div>
        </div>
      </StaticWrapper>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { term, page },
}) => {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const query = qs.stringify({
    _where: {
      _or: [{ title_contains: term }, { short_description: term }],
    },
  });

  const { data: totalCount } = await axios.get(`${API_URL}/posts?${query}`);

  const { data } = await axios.get(
    `${API_URL}/posts?${query}&_limit=${PER_PAGE}&_start=${start}`
  );

  return {
    props: { posts: data, total: totalCount, page: +page, term },
  };
};
