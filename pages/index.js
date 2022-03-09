import Layout from '../components/Layout';
import MainCenter from '../components/MainCenter';
import MainLeft from '../components/MainLeft';
import MainRight from '../components/MainRight';

export default function Home() {
  return (
    <Layout title='Feed | LinkedIn'>
      <div className='xl:w-[1128px] mx-auto flex justify-center md:space-x-6 mt-6'>
        <MainLeft />
        <MainCenter />
        <MainRight />
      </div>
    </Layout>
  );
}
