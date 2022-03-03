import { Mercado1, Mercado2, Mercado3, Mercado4, Mercado5 } from '../components/icon/Mercado';
import Layout from '../components/Layout';
import Link from 'next/link';
import Plus from '../components/icon/Plus';

const recomentasion = [
  {
    id: 1,
    name: 'Lowongan Kerja Terbaru',
    title: 'Info Lowongan Kerja Indonesia',
    avatar: '/images/profil.jpg',
  },
  {
    id: 2,
    name: 'Hidayatul Annisa',
    title: 'Recruiter & Psychologist',
    avatar: '/images/profil.jpg',
  },
  {
    id: 3,
    name: 'Ang Harry Tjahjono',
    title: 'General Manager, Human Capital & Corporate Affairs at PT Salam Pacific...',
    avatar: '/images/profil.jpg',
  },
];

export default function Home() {
  return (
    <Layout title='Feed | LinkedIn'>
      <div className='xl:w-[1128px] mx-auto flex justify-center md:space-x-6 relative mt-6'>
        <div className='flex-none hidden md:block md:w-[203px] lg:w-[180px] xl:w-[225px]'>
          <div className='flex flex-col space-y-2'>
            <div className='bg-white ring-1 ring-gray-200 shadow-sm rounded-md w-full overflow-hidden'>
              <div className='divide-y relative'>
                <div className='pb-4'>
                  <div className='w-full h-14 bg-gray-800'></div>
                  <div className='w-[72px] h-[72px] rounded-full overflow-hidden mx-auto border-2 border-white -mt-9'>
                    <img src='/images/profil.jpg' alt='' />
                  </div>
                  <div className='flex flex-col text-center mt-5 space-y-1 px-3'>
                    <h4 className='block text-base font-semibold'>Muhammad Badrun</h4>
                    <p className='block text-xs text-gray-500'>Freelancer Web Develover</p>
                  </div>
                </div>
                <div className='py-4'>
                  <Link href={'/'}>
                    <a className='flex items-start justify-between px-3 py-1 hover:bg-gray-200'>
                      <div className='flex flex-col'>
                        <p className='block text-gray-500 text-xs font-semibold'>Koneksi</p>
                        <p className='block text-gray-800 text-xs font-semibold'>
                          Kembangkan Jaringan Anda
                        </p>
                      </div>
                      <div>
                        <Mercado1 />
                      </div>
                    </a>
                  </Link>
                </div>
                <Link href={'/'}>
                  <a className='flex items-start justify-between px-3 py-4 hover:bg-gray-200'>
                    <div className='flex flex-col'>
                      <p className='block text-gray-500 text-xs font-semibold'>
                        Akses alat & wawasan eksklusif
                      </p>
                      <p className='text-gray-800 text-xs font-semibold flex space-x-1'>
                        <Mercado2 />
                        <span>Coba Premium gratis</span>
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href={'/'}>
                  <a className='flex px-3 py-3 hover:bg-gray-200'>
                    <p className='text-gray-800 text-xs font-semibold flex space-x-1'>
                      <Mercado3 />
                      <span>Item Saya</span>
                    </p>
                  </a>
                </Link>
              </div>
            </div>
            <div className='bg-white ring-1 ring-gray-200 shadow-sm rounded-md w-full overflow-hidden'>
              <div className='divide-y relative'>
                <div className='flex flex-col space-y-3 py-3'>
                  <Link href={'/'}>
                    <a className='block text-xs font-semibold text-blue-600 px-3 hover:underline'>
                      Group
                    </a>
                  </Link>
                  <Link href={'/'}>
                    <a className='text-xs font-semibold px-3 flex items-center justify-between'>
                      <span className='block text-blue-600 hover:underline w-full'>Acara</span>
                      <div className='p-1 rounded-full hover:bg-gray-200'>
                        <Plus className='w-5 h-5' />
                      </div>
                    </a>
                  </Link>
                  <Link href={'/'}>
                    <a className='block text-xs font-semibold text-blue-600 px-3 hover:underline'>
                      Hastag Yang Diikuti
                    </a>
                  </Link>
                </div>
                <Link href={'/'}>
                  <a className='flex justify-center px-3 py-3 hover:bg-gray-200'>
                    <p className='text-gray-500 text-sm font-semibold'>
                      <span>Temukan Lebih banyak</span>
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-none w-full sm:w-[524px] md:w-[493px] lg:w-[432px] xl:w-[540px]'>
          <div className='flex flex-col space-y-2'>
            <div className='bg-white ring-1 ring-gray-200 shadow-sm rounded-md w-full'>d</div>
          </div>
        </div>
        <div className='flex-none hidden lg:block lg:w-[300px] xl:w-[315px]'>
          <div className='flex flex-col space-y-2'>
            <div className='bg-white ring-1 ring-gray-200 shadow-sm rounded-md w-full overflow-hidden p-3'>
              <div className='flex items-center justify-between'>
                <h4 className='block text-gray-800 font-semibold'>Tambahkan ke feed Anda</h4>
                <Mercado4 />
              </div>
              <div className='py-4 flex flex-col space-y-3'>
                {recomentasion.map((item) => (
                  <div key={item.id} className='flex items-start justify-start space-x-2'>
                    <div className='flex-shrink-0'>
                      <div className='w-12 h-12 rounded-full overflow-hidden'>
                        <img src={item.avatar} alt={item.avatar} />
                      </div>
                    </div>
                    <div className='flex flex-col items-start'>
                      <h5 className='block text-sm font-semibold text-gray-800'>{item.name}</h5>
                      <p className='block text-xs text-gray-500 mt-1'>{item.title}</p>
                      <button className='mt-2 py-1 px-4 rounded-full border border-gray-700 flex items-center'>
                        <Plus className='w-5 h-5' />
                        <span className='block font-semibold text-gray-600'>Ikuti</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={'/'}>
                <a className='flex items-center justify-start space-x-1'>
                  <h4 className='block text-gray-500 text-sm font-semibold px-1'>
                    Lihat semua rekomendasi
                  </h4>
                  <Mercado5 />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
