import Link from 'next/link';
import { linkedinBusiness, linkedinProduct } from '../data/navbar';
import Close from './icon/Close';
import Plus from './icon/Plus';

const SidebarMain = ({ sidebarClose }) => {
  return (
    <>
      <div className='h-16 w-full flex justify-end items-end px-3 sticky top-0 bg-white pb-4'>
        <button
          onClick={sidebarClose}
          className='p-1 cursor-pointer bg-opacity-75 hover:bg-zinc-200 rounded-full focus:outline-none transition duration-150 ease-in-out'
        >
          <Close className='w-7 h-7 text-gray-500' />
        </button>
      </div>
      <div className='px-[1.3rem] mb-20'>
        <div className='border border-gray-200 rounded-lg divide-y mb-3'>
          <div className='py-4 px-6'>
            <h4 className='block font-semibold text-gray-600 text-left'>
              Lihat Produk LinkedIn Lainya
            </h4>
          </div>
          <div className='py-4 px-6 grid grid-cols-4 gap-x-8 gap-y-4'>
            {linkedinProduct.map((item) => (
              <Link key={item.id} href={item.url}>
                <a key={item.id} className='flex flex-col items-center space-y-1'>
                  <div className='border w-max rounded-md hover:shadow-md'>
                    <item.icon />
                  </div>
                  <span className='block text-xs text-gray-500 text-center'>{item.title}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className='border border-gray-200 rounded-lg divide-y'>
          <div className='py-4 px-6'>
            <h4 className='block font-semibold text-gray-600 text-left'>Layanan Bisnis LinkedIn</h4>
          </div>
          <div className='py-2 px-6'>
            {linkedinBusiness.map((item) => (
              <Link key={item.id} href={item.url}>
                <a className='block mb-3 hover:underline'>
                  <h4 className='block text-sm font-semibold'>{item.title}</h4>
                  <h5 className='block text-xs text-gray-500'>{item.description}</h5>
                </a>
              </Link>
            ))}
          </div>
          <div className='py-3 px-6'>
            <Link href={'/'}>
              <a className='font-semibold text-sm text-gray-600 text-left flex items-center hover:underline'>
                <span>Buat Halaman Perusahaan</span>
                <Plus className='w-5 h-5' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { SidebarMain };
