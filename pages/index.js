import Layout from '../components/Layout';
import MainCenter from '../components/MainCenter';
import MainLeft from '../components/MainLeft';
import MainRight from '../components/MainRight';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/authContext';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;
  if (!loading && !user) router.replace('/signin');
  return (
    <Layout title='Feed | LinkedIn'>
      <div className='xl:w-[1128px] mx-auto flex flex-col space-y-2 md:space-y-0 items-center md:items-start md:flex-row justify-center md:space-x-6 mt-6'>
        <MainLeft />
        <MainCenter />
        <MainRight />
      </div>
    </Layout>
  );
}
